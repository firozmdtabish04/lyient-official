import { useState } from "react";

const initialForm = {
  candidateName: "",
  programName: "",
  universityName: "",
  recommenderName: "",
  recommenderTitle: "",
  relationship: "",
  strengths: "",
  achievements: "",
  personalTraits: "",
  additionalNotes: "",
  template: "classic",
  showLogo: true,
  logoStyle: "classic",
  watermark: "off",
  watermarkText: "CONFIDENTIAL",
  signatureCount: 1,
  signatureName: "",
  signatureStyle: "line",
};

const templateStyles = {
  classic: {
    wrapper: "bg-white border-slate-300 text-slate-900",
    header: "text-slate-700",
    accent: "bg-slate-900 text-white",
    logo: "bg-slate-900 text-white",
  },
  blue: {
    wrapper: "bg-slate-50 border-blue-300 text-slate-900",
    header: "text-blue-700",
    accent: "bg-blue-600 text-white",
    logo: "bg-blue-600 text-white",
  },
  elegant: {
    wrapper: "bg-white border-rose-300 text-slate-900",
    header: "text-rose-700",
    accent: "bg-rose-600 text-white",
    logo: "bg-rose-600 text-white",
  },
};

function renderLogo(style) {
  switch (style) {
    case "circle":
      return (
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
          <span className="text-xl font-bold">L</span>
        </div>
      );
    case "shield":
      return (
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
          <span className="text-lg font-semibold">🛡️</span>
        </div>
      );
    default:
      return (
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-white">
          <span className="text-xl font-bold">UG</span>
        </div>
      );
  }
}

function Watermark({ form }) {
  if (form.watermark === "off") return null;
  const watermarkText =
    form.watermark === "custom"
      ? form.watermarkText || "CONFIDENTIAL"
      : form.watermark.toUpperCase();
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <span
        className="text-[7rem] uppercase tracking-[0.35em] text-slate-900 opacity-10 select-none leading-none"
        style={{ transform: "rotate(-30deg)" }}
      >
        {watermarkText}
      </span>
    </div>
  );
}

function buildLetter(values) {
  return `To ${values.candidateName} it may concern,

I am writing to recommend ${values.candidateName} for admission to the ${values.programName} program at ${values.universityName}. I have known ${values.candidateName} for ${values.relationship || "a significant"} period as ${values.recommenderTitle || "their instructor"} and have been consistently impressed by their drive, skill, and professionalism.

During our time working together, ${values.candidateName} demonstrated ${values.strengths || "strong analytical ability, excellent communication, and outstanding teamwork"}. ${values.achievements ? `${values.candidateName} also achieved ${values.achievements}. ` : ""}${values.personalTraits ? `They consistently exhibit ${values.personalTraits}. ` : ""}These qualities make them a perfect fit for the academic demands and collaborative culture of ${values.programName}.

${values.candidateName} adapts quickly, learns independently, and treats every challenge with integrity. In particular, ${values.candidateName} showed remarkable dedication by ${values.achievements || "taking ownership of project work and delivering results ahead of schedule"}. Their positive attitude and capacity to work well with others are qualities that set them apart.

I am confident that ${values.candidateName} will contribute meaningfully to ${values.universityName} and thrive in the ${values.programName} program. ${values.additionalNotes ? values.additionalNotes + "\n\n" : ""}I strongly recommend ${values.candidateName} without reservation.

Sincerely,
${values.recommenderName}
${values.recommenderTitle}`;
}

export default function LORGenerator() {
  const [logoImage, setLogoImage] = useState(null);
  const [signatureImage, setSignatureImage] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [letter, setLetter] = useState("");
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => {
      if (name === "watermark") {
        return {
          ...prev,
          watermark: value,
          watermarkText:
            value === "off" || value === "custom"
              ? prev.watermarkText
              : value.toUpperCase(),
        };
      }

      if (name === "watermarkText") {
        return {
          ...prev,
          watermark: value ? "custom" : prev.watermark,
          watermarkText: value,
        };
      }

      return {
        ...prev,
        [name]:
          type === "checkbox"
            ? checked
            : name === "signatureCount"
              ? Math.max(1, Math.min(3, Number(value)))
              : value,
      };
    });
    setCopied(false);
  };

  const handleGenerate = (event) => {
    event.preventDefault();
    setLetter(buildLetter(form));
    setCopied(false);
    if (!form.candidateName || !form.programName || !form.universityName) {
      alert("Please fill required fields");
      return;
    }

    setLetter(buildLetter(form));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(letter);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const theme = templateStyles[form.template] || templateStyles.classic;
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <style>{`
@media print {

  body, html {
    margin: 0;
    padding: 0;
    background: white;
  }

  nav, footer, .no-print {
    display: none !important;
  }

  .print-only {
    display: block !important;
    position: absolute;
    top: 0;
    left: 0;
    width: 210mm;
    height: 297mm;
    padding: 20mm;
    box-sizing: border-box;
    background: white;
  }

  .print-only * {
    color: black !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  @page {
    size: A4;
    margin: 0;
  }
}
`}</style>

      <div className="min-h-screen bg-slate-950 text-white px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-700 bg-slate-900/80 backdrop-blur-xl p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="mb-8 rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
            <h1 className="text-3xl font-semibold tracking-tight">
              Letter of Recommendation Generator
            </h1>
            <p className="mt-3 max-w-3xl text-slate-400">
              Fill in the fields below and generate a polished LOR instantly.
              This is a fully local template generator, no external AI is used.
            </p>
          </div>

          <form
            onSubmit={handleGenerate}
            className="grid gap-6 lg:grid-cols-2 no-print"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Candidate Name
                </label>
                <input
                  name="candidateName"
                  value={form.candidateName}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Program Name
                </label>
                <input
                  name="programName"
                  value={form.programName}
                  onChange={handleChange}
                  placeholder="e.g. Master of Computer Science"
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300">
                  University / Organization
                </label>
                <input
                  name="universityName"
                  value={form.universityName}
                  onChange={handleChange}
                  placeholder="e.g. University of California, Berkeley"
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  name="recommenderName"
                  value={form.recommenderName}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Asha Verma"
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Your Title / Role
                </label>
                <input
                  name="recommenderTitle"
                  value={form.recommenderTitle}
                  onChange={handleChange}
                  placeholder="e.g. Professor, Department of Computer Science"
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Relationship
                </label>
                <input
                  name="relationship"
                  value={form.relationship}
                  onChange={handleChange}
                  placeholder="e.g. instructor for Advanced Algorithms"
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Key Strengths
                </label>
                <textarea
                  name="strengths"
                  value={form.strengths}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g. analytical thinking, research skills, leadership"
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Notable Achievements
                </label>
                <textarea
                  name="achievements"
                  value={form.achievements}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g. led a capstone project, published research, earned top grades"
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Personal Traits
                </label>
                <textarea
                  name="personalTraits"
                  value={form.personalTraits}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g. dependable, motivated, collaborative"
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Additional Notes
                </label>
                <textarea
                  name="additionalNotes"
                  value={form.additionalNotes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Optional: personalize the conclusion with any final endorsement."
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-4 pt-2">
              <div className="flex flex-col gap-3 rounded-3xl border border-slate-700 bg-slate-950/80 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-medium text-white">
                    Generate your LOR
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Press Generate to build a ready-to-use letter from the
                    template.
                  </p>
                </div>
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Generate Letter
                </button>
              </div>
            </div>
          </form>

          {letter && (
            <div className="mt-8 space-y-4">
              <div className="grid gap-6 lg:grid-cols-3 no-print">
                <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5">
                  <h2 className="text-lg font-semibold text-white">
                    Print Template
                  </h2>
                  <div className="mt-4 space-y-4 text-sm text-slate-300">
                    <div>
                      <label className="block text-sm font-medium text-slate-300">
                        Template Color
                      </label>
                      <select
                        name="template"
                        value={form.template}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none"
                      >
                        <option value="classic">Classic</option>
                        <option value="blue">Blue Accent</option>
                        <option value="elegant">Elegant Red</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        id="showLogo"
                        type="checkbox"
                        name="showLogo"
                        checked={form.showLogo}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-cyan-500"
                      />
                      <label
                        htmlFor="showLogo"
                        className="text-sm text-slate-300"
                      >
                        Include logo in print
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300">
                        Logo Style
                      </label>
                      <select
                        name="logoStyle"
                        value={form.logoStyle}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none"
                      >
                        <option value="classic">Classic</option>
                        <option value="circle">Circle</option>
                        <option value="shield">Shield</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      {/* LOGO UPLOAD */}
                      <div>
                        <label className="text-sm text-slate-300">
                          Upload Logo
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              setLogoImage(URL.createObjectURL(file));
                            }
                          }}
                          className="mt-2 w-full text-sm"
                        />
                      </div>

                      {/* SIGNATURE UPLOAD */}
                      <div>
                        <label className="text-sm text-slate-300">
                          Upload Signature
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              setSignatureImage(URL.createObjectURL(file));
                            }
                          }}
                          className="mt-2 w-full text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300">
                        Watermark
                      </label>
                      <select
                        name="watermark"
                        value={form.watermark}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none"
                      >
                        <option value="off">Off</option>
                        <option value="draft">DRAFT</option>
                        <option value="confidential">CONFIDENTIAL</option>
                        <option value="custom">Custom text</option>
                      </select>
                    </div>

                    {form.watermark !== "off" && (
                      <div>
                        <label className="block text-sm font-medium text-slate-300">
                          Watermark text
                        </label>
                        <input
                          name="watermarkText"
                          value={form.watermarkText}
                          onChange={handleChange}
                          placeholder="Write watermark text"
                          className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none"
                        />
                        <p className="mt-2 text-xs text-slate-500">
                          You can type your own watermark text here.
                        </p>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-slate-300">
                        Signature Name
                      </label>
                      <input
                        name="signatureName"
                        value={form.signatureName}
                        onChange={handleChange}
                        placeholder="Optional signature name"
                        className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300">
                        Signature Style
                      </label>
                      <select
                        name="signatureStyle"
                        value={form.signatureStyle}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none"
                      >
                        <option value="line">Line</option>
                        <option value="cursive">Cursive</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300">
                        Number of Signatures
                      </label>
                      <input
                        name="signatureCount"
                        type="number"
                        min={1}
                        max={3}
                        value={form.signatureCount}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 flex flex-col gap-4 rounded-3xl border border-slate-700 bg-slate-950/80 p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-white">
                        Preview Actions
                      </h2>
                      <p className="mt-1 text-sm text-slate-400">
                        Copy the letter content or print only the LOR section.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setShowPreview((prev) => !prev)}
                        className="inline-flex items-center justify-center rounded-3xl bg-slate-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-400"
                      >
                        {showPreview ? "Hide Preview" : "Show Preview"}
                      </button>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                      >
                        {copied ? "Copied!" : "Copy to Clipboard"}
                      </button>
                      <button
                        type="button"
                        onClick={handlePrint}
                        className="inline-flex items-center justify-center rounded-3xl bg-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-400"
                      >
                        Print Only LOR
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {showPreview && (
                <div className="rounded-3xl border border-slate-700 bg-slate-900/95 p-6 text-slate-200 no-print">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${theme.accent}`}
                    />
                    <span className="text-sm text-slate-400">
                      On-screen preview
                    </span>
                  </div>
                  <div
                    className={`relative overflow-hidden rounded-3xl border ${theme.wrapper} p-6 shadow-sm`}
                  >
                    <Watermark form={form} />
                    {form.showLogo && (
                      <div
                        className={`mb-6 inline-flex items-center gap-3 rounded-3xl px-4 py-3 ${theme.logo}`}
                      >
                        {logoImage ? (
                          <img
                            src={logoImage}
                            alt="logo"
                            className="h-12 w-12 object-contain"
                          />
                        ) : (
                          <span className="text-sm">No Logo</span>
                        )}
                        <div>
                          <div className="text-sm font-semibold">
                            {form.universityName || "University Name"}
                          </div>
                          <div className="text-xs text-slate-300">
                            Letter of Recommendation
                          </div>
                        </div>
                      </div>
                    )}
                    <div className={`text-sm font-medium ${theme.header}`}>
                      {formattedDate}
                    </div>
                    <div className="mt-6 whitespace-pre-wrap text-sm leading-7 text-slate-900">
                      {letter}
                    </div>
                    <div className="mt-10 space-y-6">
                      {Array.from(
                        { length: form.signatureCount },
                        (_, index) => (
                          <div key={index} className="space-y-2">
                            <div className="h-px bg-slate-300" />
                            <div
                              className={
                                form.signatureStyle === "cursive"
                                  ? "text-lg italic"
                                  : "text-sm font-semibold"
                              }
                            >
                              {index === 0 ? (
                                signatureImage ? (
                                  <img
                                    src={signatureImage}
                                    alt="signature"
                                    className="h-10 object-contain"
                                  />
                                ) : (
                                  form.signatureName ||
                                  form.recommenderName ||
                                  "________________"
                                )
                              ) : (
                                `Signature line ${index + 1}`
                              )}
                            </div>
                            {index === 0 && (
                              <div className="text-sm text-slate-600">
                                {form.recommenderTitle}
                              </div>
                            )}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="print-only hidden text-[14px] leading-6">
                <div
                  className={`relative overflow-hidden border ${theme.wrapper} p-6`}
                  style={{ maxHeight: "265mm", overflow: "hidden" }}
                >
                  <Watermark form={form} />
                  {form.showLogo && (
                    <div
                      className={`mb-6 inline-flex items-center gap-4 rounded-3xl px-4 py-3 ${theme.logo}`}
                    >
                      {logoImage ? (
                        <img
                          src={logoImage}
                          alt="logo"
                          className="h-12 w-12 object-contain"
                        />
                      ) : (
                        <span className="text-sm">No Logo</span>
                      )}
                      <div>
                        <div className="text-base font-semibold">
                          {form.universityName || "University Name"}
                        </div>
                        <div className="text-xs">Letter of Recommendation</div>
                      </div>
                    </div>
                  )}
                  <div className={`text-sm font-medium ${theme.header}`}>
                    {formattedDate}
                  </div>
                  <div className="mt-4 whitespace-pre-wrap text-[13px] leading-[1.6]">
                    {letter}
                  </div>
                  <div className="mt6 space-y-4">
                    {Array.from({ length: form.signatureCount }, (_, index) => (
                      <div key={index} className="space-y-2">
                        <div className="h-px bg-slate-500" />
                        <div
                          className={
                            form.signatureStyle === "cursive"
                              ? "text-lg italic"
                              : "text-sm font-semibold"
                          }
                        >
                          {index === 0
                            ? form.signatureName ||
                              form.recommenderName ||
                              "________________"
                            : `Signature line ${index + 1}`}
                        </div>
                        {index === 0 && (
                          <div className="text-sm">{form.recommenderTitle}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
