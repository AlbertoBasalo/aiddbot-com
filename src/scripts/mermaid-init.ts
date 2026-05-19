import mermaid from "mermaid";

export async function initMermaidDiagrams() {
	const pres = document.querySelectorAll('pre[data-language="mermaid"]');
	if (pres.length === 0) return;

	const theme =
		document.documentElement.getAttribute("data-theme") === "dark"
			? "dark"
			: "default";

	mermaid.initialize({
		startOnLoad: false,
		theme,
		securityLevel: "loose",
	});

	for (const pre of pres) {
		const code = pre.querySelector("code");
		const graph = (code?.textContent ?? pre.textContent ?? "").trim();
		if (!graph) continue;

		const container = document.createElement("div");
		container.className = "mermaid";
		container.textContent = graph;
		pre.replaceWith(container);
	}

	await mermaid.run({ querySelector: ".mermaid" });
}
