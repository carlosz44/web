import { describe, it, expect } from "vitest";
import { projectSchema, skillSchema, workSchema } from "./schemas";

const validProject = {
  title: "Portfolio",
  description: "A site",
  link: "https://example.com",
  year: 2026,
  type: "project" as const,
};

const validSkill = {
  title: "TypeScript",
  start: "2020-01-01",
  end: "",
  type: "language" as const,
};

const validWork = {
  company: "Acme",
  role: "Engineer",
  description: "Built things",
  start: "2020-01-01",
  end: "",
  location: "Remote",
  techStack: "TypeScript, React",
};

describe("schemas accept known-good input", () => {
  it("projectSchema", () => {
    expect(projectSchema.safeParse(validProject).success).toBe(true);
  });

  it("skillSchema", () => {
    expect(skillSchema.safeParse(validSkill).success).toBe(true);
  });

  it("workSchema", () => {
    expect(workSchema.safeParse(validWork).success).toBe(true);
  });
});

describe("year, where valueAsNumber meets zod", () => {
  it("rejects NaN, which is what an emptied number input produces", () => {
    expect(
      projectSchema.safeParse({ ...validProject, year: NaN }).success,
    ).toBe(false);
  });

  it("rejects a year that arrives as a string, meaning valueAsNumber was lost", () => {
    expect(
      projectSchema.safeParse({ ...validProject, year: "2026" }).success,
    ).toBe(false);
  });
});

describe("optional-or-empty-string fields", () => {
  it.each([
    ["projectSchema.link", projectSchema, validProject, "link"],
    ["skillSchema.end", skillSchema, validSkill, "end"],
    ["workSchema.location", workSchema, validWork, "location"],
    ["workSchema.techStack", workSchema, validWork, "techStack"],
  ] as const)("%s accepts a blank string", (_name, schema, valid, field) => {
    expect(schema.safeParse({ ...valid, [field]: "" }).success).toBe(true);
  });

  it("projectSchema.link accepts being omitted entirely", () => {
    const { link: _link, ...withoutLink } = validProject;
    expect(projectSchema.safeParse(withoutLink).success).toBe(true);
  });
});

describe("enums reject values outside the union", () => {
  it("projectSchema.type", () => {
    expect(
      projectSchema.safeParse({ ...validProject, type: "other" }).success,
    ).toBe(false);
  });

  it("skillSchema.type", () => {
    expect(
      skillSchema.safeParse({ ...validSkill, type: "backend" }).success,
    ).toBe(false);
  });
});

describe("required fields", () => {
  it("reports every missing field at once, so the form can show them together", () => {
    const r = workSchema.safeParse({
      ...validWork,
      company: "",
      role: "",
      description: "",
    });
    expect(r.success).toBe(false);
    if (!r.success) {
      expect(r.error.issues.map((i) => i.path[0])).toEqual(
        expect.arrayContaining(["company", "role", "description"]),
      );
    }
  });
});
