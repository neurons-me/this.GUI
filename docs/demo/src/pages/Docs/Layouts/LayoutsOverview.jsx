import { PageTitle, Section, CodeBlock } from "this.gui";

export default function LayoutsOverview() {
  return (
    <>
      <PageTitle
        title="Layouts Installation"
        subtitle="Quick guide to using layouts in your app."
      />
      <Section title="Minimal Example">
        <p style={{ marginBottom: '1rem' }}>
          Wrap your routes with the chosen layout as the parent. Pass its configuration (title, logo, navBarRoutes), visit <strong>Layout Specification</strong> to know what configurations to pass.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          and inside define only the pages to render. Think of it as grouping pages under a layout:
        </p>
        <CodeBlock language="jsx">
{`<Route element={<MinimalLayout />}>
  <Route index element={<HomePage />} /> //Route will render with MinimalLayout
  <Route path="about" element={<AboutPage />} />//Route will render with MinimalLayout
</Route> //Close MinimalLayout

//Render Routes Using a different Layout
<Route element={<OtherLayout />}>//Choose other Layout
  <Route index element={<Dashboard />} />//Route will render with OtherLayout
  <Route path="settings" element={<SettingsPage />} />//Route will render with OtherLayout
</Route>`}
        </CodeBlock>
        <p>
          Below is an example using <strong>MinimalLayout</strong>:
        </p>
        <CodeBlock language="jsx">
{`<Route
  element={
    <MinimalLayout
      config={{
        title: "This.GUI",
        logo: "https://neurons.me/neurons.me.png",
        navBarRoutes: [
          { label: "Home", path: "/", external: false },
          {
            label: "Layouts",
            children: [
              { label: "Overview", path: "/layouts", external: false },
              { label: "Minimal Layout", path: "/layouts/minimal", external: false }
            ]
          },
          { label: "neurons.me", path: "https://neurons.me", external: true },
          { label: "Docs", path: "https://docs.neurons.me", external: true }
        ]
      }}
    />
  }
>
  <Route index element={<HomePage />} />
  <Route path="layouts" element={<LayoutsOverview />} /> 
  <Route path="layouts/minimal" element={<MinimalPage />} />
</Route>`}
        </CodeBlock>
        <p style={{ marginTop: '1rem', color: '#888', fontSize: '0.9rem' }}>
          Visit the <a href="/layouts/minimal" style={{ color: '#0aa' }}>Minimal Layout page</a> for more details.<br />
        </p>
      </Section>
    </>
  );
}