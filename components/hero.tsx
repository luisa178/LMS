import { Button } from "@/components/ui/button"



export default function Hero() {
    return(
        <section className="container flex flex-col items-center justify-center gap-6 py-24 text-center md:py-32">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Conviertete en <br/>
                un Desarrollador {""}
                <span className="bg-gradient bg-gradient-to-r from-[#ff0080] to-[#7928CA] bg-clip-text text-transparent">
                    Full Stack
                </span>
                <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
                    Aprende todo lo relacionado con el desarrollo de software y sus nuevastecnologias gracias a la nueva plataforma de ADSO
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button 
                    variant="default" className="bg-gradient-to-r from-[#ff0080] to-[#7928CA] text-white ">
                        Ver cursos
                    </Button>
                    
                </div>
            </h1>
        </section>
    )
}