import { Typography } from '@mui/material';
import { PageTitle, Section, Gridx } from 'this.gui'; // ✅ Ahora desde la librería

const neuronsLogoUrl = 'https://www.neurons.me/media/neurons-grey.png';

function HomePage() {
    const gridItems = [
        {
            title: "Welcome",
            content: (
                <>
                    Welcome to <strong>this.gui</strong> – Theme system is active.
                </>
            ),
            xs: 12,
            md: 12,
        },
        {
            title: "Visit Neurons",
            content: (
                <a href="https://neurons.me" target="_blank" rel="noopener noreferrer">
                    <img
                        src={neuronsLogoUrl}
                        alt="Neurons Logo"
                        style={{ height: 55, opacity: 0.8, cursor: 'pointer' }}
                    />
                </a>
            ),
            xs: 12,
            md: 12,
        },
    ];

    return (
        <>
            <PageTitle
                title="THIS.GUI"
                subtitle="A centralized theme system for your apps."
            />
            <Section title="Overview">
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Explore the components and layouts available in <strong>this.gui</strong>.
                </Typography>
                <Gridx items={gridItems} />
            </Section>
        </>
    );
}

export default HomePage;