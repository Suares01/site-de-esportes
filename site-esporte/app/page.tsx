import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-4xl mx-auto mt-4">
      <section>

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">As últimas notícias do <span className="text-blue-600 dark:text-green-500">futebol</span></h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Confira as últimas novidades do futebol mundial!</p>

      </section>

      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 hover:bg-gray-100">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
          >
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Gabigol bola de ouro?
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Gabigol é o favorito a vencer a bola de ouro, com 999 gols na temporada!
            </p>
          </div>
        </div>

        <Image
          alt="Gabigol"
          src="/gabi.jpg"
          className="h-56 w-full object-cover sm:h-full"
          height={600}
          width={600}
        />
      </section>

      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 hover:bg-gray-100">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
          >
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Parente do jogador German Cano em estado grave
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Primo PVC Cano é encontrado estourado em caxias!
            </p>
          </div>
        </div>

        <div>
          <Image
            alt="Cano"
            src="/cano.jpg"
            className="h-56 w-full object-cover sm:h-full"
            height={600}
            width={300}
          />
          <Image
            alt="Cano"
            src="/german.webp"
            className="h-56 w-full object-cover sm:h-full"
            height={600}
            width={300}
          />
        </div>
      </section>

      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 hover:bg-gray-100">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
          >
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Reforço no Vascão??
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              CR7 negocia com Vasco por 4 temporadas.
            </p>
          </div>
        </div>

        <Image
          alt="Cano"
          src="/cr7.jpg"
          className="h-56 w-full object-cover sm:h-full"
          height={600}
          width={600}
        />
      </section>
    </main>
  )
}
