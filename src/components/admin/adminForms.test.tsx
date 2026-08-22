import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const saveProject = vi.fn();
const saveSkill = vi.fn();
const saveWork = vi.fn();

vi.mock("@/server/actions/projects", () => ({
  saveProject: (...args: unknown[]) => saveProject(...args),
}));
vi.mock("@/server/actions/skills", () => ({
  saveSkill: (...args: unknown[]) => saveSkill(...args),
}));
vi.mock("@/server/actions/work", () => ({
  saveWork: (...args: unknown[]) => saveWork(...args),
}));

const { default: ProjectForm } = await import("./projectForm");
const { default: SkillForm } = await import("./skillForm");
const { default: WorkForm } = await import("./workForm");

const save = () => screen.getByRole("button", { name: "Save" });

beforeEach(() => {
  saveProject.mockReset();
  saveSkill.mockReset();
  saveWork.mockReset();
});

describe("ProjectForm", () => {
  const defaults = {
    title: "Portfolio",
    description: "A site",
    link: "",
    year: 2026,
    type: "project" as const,
  };

  function renderForm() {
    render(
      <>
        <ProjectForm id="1" formId="project-form" defaultValues={defaults} />
        <button type="submit" form="project-form">
          Save
        </button>
      </>,
    );
  }

  it("submits parsed values, with year still a number", async () => {
    const user = userEvent.setup();
    renderForm();

    await user.click(save());

    expect(saveProject).toHaveBeenCalledWith("1", {
      ...defaults,
      year: 2026,
    });
  });

  it("blocks submission and renders an error when a required field is emptied", async () => {
    const user = userEvent.setup();
    renderForm();

    await user.clear(screen.getByLabelText("Title"));
    await user.click(save());

    expect(await screen.findByText(/too small/i)).toBeInTheDocument();
    expect(saveProject).not.toHaveBeenCalled();
  });

  it("blocks submission when the year input is emptied to NaN", async () => {
    const user = userEvent.setup();
    renderForm();

    await user.clear(screen.getByLabelText("Year"));
    await user.click(save());

    expect(await screen.findByText(/expected number/i)).toBeInTheDocument();
    expect(saveProject).not.toHaveBeenCalled();
  });
});

describe("SkillForm", () => {
  it("passes a blank date input through as an empty string, meaning ongoing", async () => {
    const user = userEvent.setup();
    render(
      <>
        <SkillForm
          id={null}
          formId="skill-form"
          defaultValues={{
            title: "TypeScript",
            start: "2020-01-01",
            end: "",
            type: "language",
          }}
        />
        <button type="submit" form="skill-form">
          Save
        </button>
      </>,
    );

    await user.click(save());

    expect(saveSkill).toHaveBeenCalledWith(
      null,
      expect.objectContaining({ end: "" }),
    );
  });
});

describe("WorkForm", () => {
  it("submits with all three optional fields left blank", async () => {
    const user = userEvent.setup();
    render(
      <>
        <WorkForm
          id={null}
          formId="work-form"
          defaultValues={{
            company: "Acme",
            role: "Engineer",
            description: "Built things",
            start: "2020-01-01",
            end: "",
            location: "",
            techStack: "",
          }}
        />
        <button type="submit" form="work-form">
          Save
        </button>
      </>,
    );

    await user.click(save());

    expect(saveWork).toHaveBeenCalledWith(
      null,
      expect.objectContaining({ end: "", location: "", techStack: "" }),
    );
  });
});
