import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
  } from "@/components/ui/accordion"
import { Tilt } from "../ui/tilt"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const imgs = [
	{id: 1, src: "/images/1.jpg"},
	{id: 2, src: "/images/2.jpg"},
	{id: 3, src: "/images/3.jpg"},
	{id: 4, src: "/images/4.jpg"},
	{id: 5, src: "/images/5.jpg"},
	{id: 6, src: "/images/6.jpg"},
	{id: 7, src: "/images/7.jpg"},
	{id: 8, src: "/images/8.jpg"},
	{id: 9, src: "/images/9.jpg"}
]
  
  export function FAQ() {
	return (
	<div id="faq" className="w-11/12 md:w-2/3 mx-auto flex justify-center items-center gap-5 mb-44">
	  <Accordion type="single" collapsible className="w-full">
		<AccordionItem value="item-2">
		  <AccordionTrigger className="text-xl">Qu'est-ce que Tropitech ?</AccordionTrigger>
		  <AccordionContent className="ml-5 text-lg my-2">
			Tropitech est une expérience immersive mêlant musique électronique et scénographie tropicale dans un cadre atypique.<br/><br/>Organisée dans les Caves du Château de Coppet, cette soirée propose un voyage sonore évolutif, de la house à la techno, porté par des artistes émergents et underground.<br/><br/>L’objectif : créer une atmosphère unique où la fête prend une dimension sensorielle, entre basses vibrantes et décor exotique.
		  </AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3">
		  <AccordionTrigger className="text-xl">À quoi ressemble l'événement ?</AccordionTrigger>
		  <AccordionContent className="ml-5 text-lg my-2">
			<div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center place-content-between gap-5">
								{/* <Tilt rotationFactor={8} isRevese>
								<div
									style={{
									borderRadius: '12px',
									}}
									className='flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
								>
									<img
									src='/IMG_0746.jpg'
									alt='Ghost in the shell - Kôkaku kidôtai'
									className='h-80 w-full object-cover'
									/>
								</div>
								</Tilt>
								<Tilt rotationFactor={8} isRevese>
								<div
									style={{
									borderRadius: '12px',
									}}
									className='flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
								>
									<img
									src='/IMG_0745.jpg'
									alt='Ghost in the shell - Kôkaku kidôtai'
									className='h-80 w-full object-cover'
									/>
								</div>
								</Tilt>
								<Tilt rotationFactor={8} isRevese>
								<div id="test"
									style={{
									borderRadius: '12px',
									}}
									className='flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
								>
									<img
									src='/IMG_0747.jpg'
									alt='Ghost in the shell - Kôkaku kidôtai'
									className='h-80 w-full object-cover'
									/>
								</div>
								</Tilt> */}
								{imgs.map((img) => (
									<Tilt key={img.id} rotationFactor={8} isRevese>
									<div
										style={{
										borderRadius: '12px',
										}}
										className='flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
									>
										<Image
										width={1000}
										height={1000}
										src={img.src}
										alt='Image Tropitech'
										className='h-80 w-full object-cover'
										/>
									</div>
									</Tilt>
								))}
							</div>
		  </AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-1">
		  <AccordionTrigger className="text-xl">Est-ce facile d'accès ?</AccordionTrigger>
		  <AccordionContent className="ml-5 text-lg my-2">
			Oui, c'est à 3min à pied de la gare de Coppet.<br/><br/>Lien Google Maps :<br/><span className="block h-2" /><Link href={"https://maps.app.goo.gl/7D6145TF1Q7NVCnB6"} className="underline underline-offset-2 flex justify-start items-center gap-2 duration-150 hover:text-foreground/80"><ExternalLink className="size-5" />Caves du Château, Rue du Greny</Link>
		  </AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-4">
		  <AccordionTrigger className="text-xl">Où retrouver les artistes ?</AccordionTrigger>
		  <AccordionContent className="ml-5 text-lg my-2">
			Edo :<br/><span className="block h-2" /><Link href={"https://soundcloud.com/edoardo-failla-545458741/lets-just-grab-one-beer?si=673fc458937547f6970f6526dd820328&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} className="underline underline-offset-2 flex justify-start items-center gap-2 duration-150 hover:text-foreground/80"><ExternalLink className="size-5" />Soundcloud</Link>
			<br/>
			EREIB :<br/><span className="block h-2" /><Link href={"https://soundcloud.com/lakesidebasement/basement-podcast-x-introspective-ereib?in=ereib/sets/podcasts&si=62b33d65021b4055a126d7a7915a0055&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} className="underline underline-offset-2 flex justify-start items-center gap-2 duration-150 hover:text-foreground/80"><ExternalLink className="size-5" />Soundcloud</Link>
			<br/>
			Cadence :<br/><span className="block h-2" /><Link href={"https://soundcloud.com/mitsu2000/mitsucast-067-cadence?in=cadence_live/sets/mixes&si=04948642d6804029a927ce8e691f687d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} className="underline underline-offset-2 flex justify-start items-center gap-2 duration-150 hover:text-foreground/80"><ExternalLink className="size-5" />Soundcloud</Link>
		    <br/>
			Götz :<br/><span className="block h-2" /><Link href={"https://soundcloud.com/gotzzzz/immersion?si=3b328cbb8c8541dea670dffda265ad90&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} className="underline underline-offset-2 flex justify-start items-center gap-2 duration-150 hover:text-foreground/80"><ExternalLink className="size-5" />Soundcloud</Link>
		    <br/>
			Venuss :<br/><span className="block h-2" /><Link href={"https://soundcloud.com/user-875894149/venuss-1-home-set_1024?si=cdb8cc00a0da417eb3e03d3daf4bdc1e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} className="underline underline-offset-2 flex justify-start items-center gap-2 duration-150 hover:text-foreground/80"><ExternalLink className="size-5" />Soundcloud</Link>
		  </AccordionContent>
		</AccordionItem>
	  </Accordion>
	  </div>
	)
  }
  