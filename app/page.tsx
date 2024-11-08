import Image from "next/image";

import HeaderLinks from "@/components/HeaderLinks";
import MobileMenu from "@/components/MobileMenu";
import ChurchImage from "@/public/images/church.png";
import FirstImage from "@/public/images/first-image.png";
import InvertedLeavesOne from "@/public/leaves/inverted-leaf-1.svg";
import InvertedLeavesTwo from "@/public/leaves/inverted-leaf-2.svg";
import SecondLeavesOne from "@/public/leaves/leaves-1.svg";
import SecondLeavesTwo from "@/public/leaves/leaves-2.svg";
import ThirdLeavesOne from "@/public/leaves/leaves-3.svg";
import ThirdLeavesTwo from "@/public/leaves/leaves-4.svg";
import PresentImage from "@/public/present.png";

import ConfirmationForm from "./_components/ConfirmationForm";
import ImageCarouselList from "./_components/ImageCarouselList";
import LeavesText from "./_components/LeavesText";
import PresentForm from "./_components/PresentForm";

export default function Home() {
  return (
    <main className="text-[#555353]">
      <header className="bg-primary-two">
        <div className="flex items-center justify-start xl:justify-center">
          <LeavesText text="JHMC" id="home" />
          <MobileMenu />
        </div>
        <HeaderLinks />
      </header>
      <article className="gradient-white-transparent relative isolate min-h-[min(80vh,60rem)] w-full text-[#3D3D3D]">
        <Image
          src={FirstImage}
          placeholder="blur"
          blurDataURL={FirstImage.blurDataURL}
          alt="First Image"
          fill
          quality={100}
          priority
          className="pointer-events-none -z-10 w-full object-cover object-[75%_100%] md:object-center"
          sizes="100vw"
        />
        <div className="z-10 flex flex-col items-center gap-6 px-4 py-8 font-inter md:mb-40 lg:mb-60">
          <h1 className="text-center text-4xl">
            Kim Ju Hyung e Maria Clara de Faria
          </h1>
          <p className="text-center text-3xl">
            {`"사랑을 축하하는 자리에 함께해주세요"`}
          </p>
          <p className="max-w-[55ch] text-left text-lg text-black md:text-[#3D3D3D]">{`Bem-vindos à nossa alegre celebração de amor! Estamos muito felizes em convidá-los para compartilhar um dia repleto de risadas, lágrimas de felicidade e momentos inesquecíveis. Nossa jornada juntos tem sido uma aventura extraordinária, e mal podemos esperar para iniciar este novo capítulo rodeados por nossos queridos familiares e amigos. Por favor, juntem-se a nós no dia 28/12/2024 enquanto trocamos votos e embarcamos em uma vida de companheirismo.`}</p>
        </div>
      </article>
      <article className="relative overflow-hidden bg-primary-two md:overflow-visible lg:min-h-[min(40vh,40rem)]">
        <Image
          src={SecondLeavesOne}
          alt="Second Leaves"
          width={150}
          height={150}
          className="pointer-events-none absolute -top-20 left-0 z-10 hidden w-[min(60%,30rem)] opacity-75 md:block md:w-[min(30%,30rem)] lg:-top-40"
        />
        <Image
          src={SecondLeavesTwo}
          alt="Second Leaves"
          width={150}
          height={150}
          className="pointer-events-none absolute left-0 top-0 z-10 hidden w-[min(60%,30rem)] opacity-75 md:block md:w-[min(30%,30rem)]"
        />
        <div className="pb-8 md:pt-0 lg:pt-40">
          <LeavesText text="Nossa Historia" id="history" />
          <ImageCarouselList />
        </div>
      </article>
      <article className="relative isolate bg-primary-three pb-8 lg:min-h-[min(80vh,60rem)] lg:pb-16">
        <Image
          src={InvertedLeavesOne}
          alt="Second Leaves"
          width={150}
          height={150}
          className="pointer-events-none absolute right-0 top-[-25rem] -z-10 hidden w-[min(60%,30rem)] opacity-75 md:block md:w-[min(30%,30rem)]"
        />
        <Image
          src={InvertedLeavesTwo}
          alt="Second Leaves"
          width={150}
          height={150}
          className="pointer-events-none absolute -top-40 right-0 -z-10 hidden w-[min(60%,30rem)] opacity-75 md:block md:w-[min(30%,30rem)]"
        />

        <Image
          src={ThirdLeavesTwo}
          alt="Second Leaves"
          width={150}
          height={150}
          className="pointer-events-none absolute -bottom-20 left-0 -z-10 hidden w-[min(60%,30rem)] opacity-75 md:block md:w-[min(30%,30rem)] lg:-bottom-48"
        />
        <div className="mx-auto max-w-7xl px-4 py-8 lg:pt-40">
          <LeavesText text="Cerimônia" id="ceremony" />
          <p className="z-50 mx-auto max-w-7xl font-inter text-lg">
            {`Será uma alegria imensa ter vocês conosco no momento em que nossa
              união será abençoada diante de Deus! Aguardamos vocês no dia 28 de
              dezembro de 2024, às 18h, na Igreja de Senhora Sant'Ana, em Rio de
              Contas, BA.`}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 py-8 md:flex-row">
            <Image
              src={ChurchImage}
              alt="Church"
              width={775}
              height={726}
              className="h-[min(30rem,50vw)] max-w-full md:flex-1 md:basis-1/2 md:object-cover md:object-center"
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1630.5951537931833!2d-41.81424480661385!3d-13.582711435872376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x743869bb47b37f5%3A0x280a2d497b0871e5!2sIgreja%20de%20Senhora%20Sant&#39;Ana!5e0!3m2!1sen!2sbr!4v1730890436634!5m2!1sen!2sbr"
              width="775"
              height="726"
              className="h-[min(30rem,50vw)] max-w-full md:flex-1 md:basis-1/2"
              style={{
                border: "0",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="font-inter text-lg">{`Igreja de Senhora Sant'Ana`}</p>
          <p className="mt-4 font-inter text-base">
            Rio de Contas, BA, 46170-000
          </p>
        </div>
        <section className="relative mx-auto max-w-7xl px-4">
          <LeavesText text="Recepção" id="reception" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.866078452414!2d-41.815578269589246!3d-13.604990378312875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x74387005a4f7513%3A0xd3c9b87176bdb814!2sCondominio%20Sa%20Zabe!5e0!3m2!1sen!2sbr!4v1731001608329!5m2!1sen!2sbr"
            width="9999"
            height="726"
            className="mx-auto max-w-full"
            style={{
              border: "0",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="mt-8 font-inter text-lg">{`Casa Vermelha`}</p>
          <p className="mt-4 font-inter text-base">
            Estrada Carlos Souto, loteamento Sazabé, Casa Vermelha, Rio de
            Contas, BA
          </p>
        </section>
      </article>
      <article className="relative isolate bg-primary-two lg:min-h-[min(80vh,60rem)]">
        <Image
          src={ThirdLeavesOne}
          alt="Third Leaves"
          width={150}
          height={150}
          className="pointer-events-none absolute left-0 top-0 -z-10 hidden w-[min(60%,30rem)] opacity-75 md:-top-40 md:block md:w-[min(30%,30rem)]"
        />
        <div className="mx-auto max-w-7xl px-4 py-8 lg:pt-40">
          <LeavesText text="Confirmação" id="confirmation" />
          <p className="text-center text-3xl ">Confirme sua presença</p>
          <ConfirmationForm />
        </div>
      </article>
      <article className="relative isolate bg-primary-three pb-8 lg:min-h-[min(80vh,60rem)] lg:pb-16">
        <Image
          src={InvertedLeavesOne}
          alt="Second Leaves"
          width={150}
          height={150}
          className="pointer-events-none absolute right-0 top-[-25rem] -z-10 hidden w-[min(60%,30rem)] opacity-75 md:block md:w-[min(30%,30rem)]"
        />
        <Image
          src={InvertedLeavesTwo}
          alt="Second Leaves"
          width={150}
          height={150}
          className="pointer-events-none absolute -top-48 right-0 -z-10 hidden w-[min(60%,30rem)] opacity-75 md:block md:w-[min(30%,30rem)]"
        />
        <section className="relative mx-auto max-w-7xl px-4 py-8 lg:pt-40">
          <LeavesText text="Presentes" id="presents" />
          <p className="z-50 mx-auto max-w-7xl font-inter text-lg">
            {`Em nosso casamento, decidimos adotar a tradição coreana de receber
            dinheiro dos convidados, conhecida como "honsae," que é uma prática
            significativa na cultura do noivo. Essa tradição envolve a
            contribuição dos convidados em vez de presentes físicos, e a quantia
            pode ser ajustada conforme a preferência de cada um.`}
          </p>
          <Image
            src={PresentImage}
            alt="Present"
            width={4376}
            height={3310}
            placeholder="blur"
            className="mx-auto my-8 h-auto max-h-[40rem] w-full max-w-7xl object-cover object-top"
          />
          <p className="z-50 mx-auto max-w-7xl font-inter text-lg">
            {`Para facilitar, pedimos que cada convidado coloque seu nome e escreva uma mensagem especial para nós. Após isso, os dados bancários para a transferência aparecerão. Agradecemos de coração qualquer forma de apoio, pois isso nos ajudará a construir nossa nova vida juntos.`}
          </p>
          <PresentForm />
        </section>
      </article>
    </main>
  );
}
