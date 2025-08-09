import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CustomThemeProvider } from "this.gui";
import HomePage from './pages/HomePage';
import LayoutsOverview from './pages/Docs/Layouts/LayoutsOverview';
import MinimalPage from './pages/Docs/Layouts/Minimal.jsx';
import PageElementsOverview from './pages/Docs/PageElements/PageElementsOverview';
import TitlesPage from './pages/Docs/PageElements/TitlesPage';
import ContainersPage from './pages/Docs/PageElements/ContainersPage';
import GridPage from './pages/Docs/PageElements/GridPage';
import SectionPage from './pages/Docs/PageElements/SectionPage';
import CodeBlockPage from './pages/Docs/PageElements/CodeBlockPage';
import PageParagraphPage from './pages/Docs/PageElements/PageParagraphPage';
import PageImagePage from './pages/Docs/PageElements/PageImagePage';
import PageDividerPage from './pages/Docs/PageElements/PageDividerPage';
import PageListPage from './pages/Docs/PageElements/PageListPage';
import PageEmbedPage from './pages/Docs/PageElements/PageEmbedPage';
import TableOfContentsPage from './pages/Docs/PageElements/TableOfContentsPage';
import TabsPage from './pages/Docs/PageElements/TabsPage';
import TopAndSideBarPage from './pages/Docs/AppBars/TopAndSideBarPage';
import OverallDemo from './pages/Docs/Demos/OverallDemo'; 
import DocsLayout from './DocsLayout'; 
import FloatingMePage from './pages/Me/FloatingMePage';

function App() {
    return (
        <CustomThemeProvider>
            <Router>
                <Routes>
                    {/* ===========================
                        📘 DOCUMENTATION ROUTES
                    ============================ */}
                    <Route path="docs" element={<DocsLayout />}>
                        <Route path="overview" element={<HomePage />} />
                        <Route path="layouts">
                            <Route path="overview" element={<LayoutsOverview />} />
                            <Route path="minimal" element={<MinimalPage />} />
                        </Route>
                        <Route path="elements">
                            <Route path="overview" element={<PageElementsOverview />} />
                            <Route path="title" element={<TitlesPage />} />
                            <Route path="paragraph" element={<PageParagraphPage />} />
                            <Route path="image" element={<PageImagePage />} />
                            <Route path="divider" element={<PageDividerPage />} />
                            <Route path="list" element={<PageListPage />} />
                            <Route path="embed" element={<PageEmbedPage />} />
                            <Route path="toc" element={<TableOfContentsPage />} />
                            <Route path="tabs" element={<TabsPage />} />
                            <Route path="container" element={<ContainersPage />} />
                            <Route path="grid" element={<GridPage />} />
                            <Route path="section" element={<SectionPage />} />
                            <Route path="codeblock" element={<CodeBlockPage />} />
                            <Route path="topbarandsidebar" element={<TopAndSideBarPage />} />
                        </Route>
                        <Route path="demo" element={<OverallDemo />} />
                        <Route path="floating" element={<FloatingMePage />} />
                    </Route>
                    <Route path="/" element={<Navigate to="/docs/overview" replace />} />
                </Routes>
            </Router>
        </CustomThemeProvider>
    );
}

export default App;