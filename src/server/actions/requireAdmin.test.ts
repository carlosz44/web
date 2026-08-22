import { describe, it, expect, vi, beforeEach } from "vitest";

const requireAdmin = vi.fn();

vi.mock("@/lib/auth", () => ({
  auth: { requireAdmin: () => requireAdmin() },
}));

vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));

const adminDb = {
  createProject: vi.fn(),
  updateProject: vi.fn(),
  deleteProject: vi.fn(),
  createSkill: vi.fn(),
  updateSkill: vi.fn(),
  deleteSkill: vi.fn(),
  createWork: vi.fn(),
  updateWork: vi.fn(),
  deleteWork: vi.fn(),
};

vi.mock("@/lib/db/admin", () => adminDb);

const modules: [string, Record<string, unknown>][] = [
  ["projects", await import("./projects")],
  ["skills", await import("./skills")],
  ["work", await import("./work")],
];

const validValues: Record<string, unknown> = {
  projects: {
    title: "Portfolio",
    description: "A site",
    link: "",
    year: 2026,
    type: "project",
  },
  skills: {
    title: "TypeScript",
    start: "2020-01-01",
    end: "",
    type: "language",
  },
  work: {
    company: "Acme",
    role: "Engineer",
    description: "Built things",
    start: "2020-01-01",
    end: "",
    location: "",
    techStack: "",
  },
};

const actions = modules.flatMap(([moduleName, mod]) =>
  Object.entries(mod)
    .filter(([, value]) => typeof value === "function")
    .map(([exportName, fn]) => ({
      name: `${moduleName}.${exportName}`,
      moduleName,
      exportName,
      fn: fn as (...args: unknown[]) => Promise<unknown>,
    })),
);

const dbMocks = () => Object.values(adminDb);

beforeEach(() => {
  requireAdmin.mockReset();
  requireAdmin.mockResolvedValue({ id: "u1", githubId: 1, username: "me" });
  dbMocks().forEach((fn) => fn.mockReset());
});

it("discovers the server actions, so describe.each below cannot pass vacuously", () => {
  expect(actions.length).toBeGreaterThanOrEqual(6);
});

describe.each(actions)("$name", (action) => {
  it("calls requireAdmin before touching the database", async () => {
    await (action.exportName.startsWith("delete")
      ? action.fn("some-id")
      : action.fn(null, validValues[action.moduleName]));

    expect(requireAdmin).toHaveBeenCalledTimes(1);

    const dbOrders = dbMocks()
      .flatMap((fn) => fn.mock.invocationCallOrder)
      .sort((a, b) => a - b);

    expect(dbOrders.length).toBeGreaterThan(0);
    expect(requireAdmin.mock.invocationCallOrder[0]).toBeLessThan(dbOrders[0]);
  });
});
