import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PreguntasFrecuentes() {
  return (
    <section className="w-full py-4 md:py-12 bg-white flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2  pt-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Preguntas Frecuentes</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-poppins text-2xl font-bold">
                ¿Cuanto tarda en llegar el pedido?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-lg font-poppins">
                Depende la zona, en general tarda entre 24 a 72hs habiles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-poppins text-2xl font-bold">
                ¿Cuáles son los métodos de pago aceptados?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-lg font-poppins">
                Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), PayPal, y transferencias
                bancarias. Todos los pagos se procesan de manera segura a través de nuestro sistema encriptado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-poppins text-2xl font-bold">
                ¿Cuál es la política de devoluciones?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-lg font-poppins">
                Ofrecemos devoluciones completas dentro de los 30 días posteriores a la compra si no estás satisfecho
                con nuestro servicio. Para solicitar una devolución, contacta a nuestro equipo de soporte con tu número
                de pedido y el motivo de tu solicitud.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-poppins text-2xl font-bold">
                ¿Cómo puedo contactar al servicio de atención al cliente?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-lg font-poppins">
                Podes escribirnos a nuestro whatsapp o contactarnos por mail
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </section>
  )
}
