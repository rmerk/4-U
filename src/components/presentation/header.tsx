import {
    Button,
    Typography,
} from "@material-tailwind/react";
import Navbar from "../navbar";
import ThemeProvider from "../theme-provider";

export function HeroPresentation() {
    const styles = {
        background: `url("/fourUHeroImage.svg")`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: '800px'
    };

    return (
        <ThemeProvider>
            <Navbar />
            <header
                className="h-full w-screen place-items-center bg-white relative py-8 lg:mb-36"
                style={styles}
            >
                <div className="container mx-auto grid items-center lg:grid-cols-2">
                    <div className="text-center lg:text-left pt-32">
                        <Typography
                            variant="h1"
                            color="blue-gray"
                            className="mb-8 lg:mr-32 leading-tight font-black"
                        >
                            The perfect foundation for your <span className="text-blue">Astro Project</span>
                        </Typography>
                        <Typography variant="lead" color="blue-gray" className="lg:pr-32">
                            AstroLaunch UI is a free template designed to be both lightweight and feature-rich. It comes packed with everything you need to get your Online Store ready in no time.
                        </Typography>
                        <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
                            <a href="#pricing">
                                <Button color="dark" className="flex items-center">
                                    Get Started
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </ThemeProvider>
    );
}

export default HeroPresentation;
