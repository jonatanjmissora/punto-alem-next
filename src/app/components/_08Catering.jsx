import Image from 'next/image'
import styles from '../styles/_08Catering.module.css'
import fotos from "../constant"
import { FramerReveal } from './FramerReveal'

export const _08Catering = () => {
  return (
    <section id="catering">
      <article className={styles.catering}>
        <div className={styles.wrapper}>
          <FramerReveal 
          className={styles.text_container}
          options={{from: "left"}}
          >
            <h3 className={styles.title}>Catering único y especial</h3>
            <p>Sorprender a tus invitados con un servicio gastronómico de primera clase. Nuestros chefs preparan platos únicos con elaboración propia y excelente calidad. Podrás degustar sabores exquisitos, desde entradas caliente y fría, tapeos, platos principales exclusivos, hasta los más finos y dulces postres y tortas.</p>
            <p>Elaboramos comida al aire libre, nuestros servicios te brindaran la posibilidad de probar nuestro mejor catering también en exteriores.</p>
            <p>Además, te ofrecemos un servicio de bartender, que te preparará los mejores y mas ricos tragos. Acompañado siempre por nuestro servicio de mozos, que atenderá de la mejor manera y profesionalismo.</p>
          </FramerReveal>
          <FramerReveal
          className={styles.image_container} 
          options={{from: "right"}}
          >
            <Image 
              className={styles.image1} 
              src={fotos["07"].src} 
              alt={fotos["07"].alt}
              title={fotos["07"].title}
            />
          </FramerReveal>
        </div>

      </article>
      <article>
        <div className={styles.row}>
          <FramerReveal
            options={{from: "left"}}
          >
            <div className={styles.image_row_container}>

            <Image 
              className={styles.image_row} 
              src={fotos["09"].src} 
              alt={fotos["09"].alt}
              title={fotos["09"].title} 
              />
              </div>
          </FramerReveal>
          <FramerReveal
            className={styles.frase_container}
            options={{from: "right"}}
          >
            <h2 className={styles.frase}>DISTINCIÓN</h2>
          </FramerReveal>  
        </div>

         <div className={styles.row}>
          <FramerReveal
              className={styles.frase_container}
              options={{from: "left"}}
          >
            <h2 className={styles.frase}>ESTILO</h2>
          </FramerReveal>
          <FramerReveal
              options={{from: "right"}}
          >
            <div className={styles.image_row_container}>
            <Image 
            className={styles.image_row} 
            src={fotos["10"].src} 
            alt={fotos["10"].alt}
            title={fotos["10"].title}
            />
            </div>
          </FramerReveal>
        </div>

        <div className={styles.row}>
          <FramerReveal
              options={{from: "left"}}
          > 
            <div className={styles.image_row_container}>
            <Image 
              className={styles.image_row} 
              src={fotos["11"].src} 
              alt={fotos["11"].alt}
              title={fotos["11"].title}
              />
              </div>
          </FramerReveal>
          <FramerReveal
            className={styles.frase_container}
            options={{from: "right"}}
          >
            <h2 className={styles.frase}>ELABORACIÓN</h2>
          </FramerReveal>
        </div>
      </article>
    </section>
  )
}