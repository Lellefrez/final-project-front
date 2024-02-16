import backgroundImg from "../assets/3teopCharaters..jpeg";
import LogoImg from "../assets/Universal-Combats-nosfondo-removebg-preview.png";
import SectionImg1 from "../assets/all-charter.jpeg";
import SectionImg2 from "../assets/dfdoajv-0507a8c3-3647-4a41-bebf-c9878bed6fa5.jpeg";
import SectionImg3 from "../assets/maxresdefault.jpeg";
import SectionImg4 from "../assets/https___hypebeast.com_image_2019_01_tw-boruto-jump-force-roster-addition-gameplay-video.jpeg";
export default () => {
  return (
    <>
      <div
        className="parallax-container"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        {/* <img className="background-img" src={backgroundImg} alt="" />  */}
      </div>
      <section className="section">
        <div className="content">
          <img className="logo" src={LogoImg} alt="" />
        </div>
      </section>
      {/* MAIN SECTIONS */}
      <article id="main-section">
        <section className="text-img-section">
          <div>
            <div className="img-body">
              <img src={SectionImg1} alt="Multi Characters" />
            </div>
            <div>
              <h2>Crea un personaggio esistente o inventato</h2>
              <p>
                In questo sito puoi creare un personaggio anime già esistente o
                creare l'eroe o villain che hai sempre sognato, inserendolo in
                qualsiasi universo esistente descrivendo la sua storia e i suoi
                poteri.
              </p>
            </div>
          </div>
        </section>
        <section className="text-img-section">
          <div>
            <div>
              <h2>Ritrova alcuni scenari epici</h2>
              <p>
                Divertiti a scegliere lo scenario della tua porossima battaglia
                facendo riafiorare i ricordi che solo alcuni scenari possono
                darti.
              </p>
            </div>
            <div className="img-body">
              <img src={SectionImg2} alt="Nameck" />
            </div>
          </div>
        </section>

        <section className="text-img-section">
          <div>
            <div className="img-body">
              <img src={SectionImg3} alt="Battles" />
            </div>
            <div>
              <h2>Combattimeti </h2>
              <p>
                Inizia degli scontri epici con il persoaggio che preferisci. Dai
                il via a degli 1 vs 1 che hai sempre sognato.
              </p>
            </div>
          </div>
        </section>

        <section id="ultimate-section" className="text-img-ultimatesection">
          <div>
            <h2>UN SITO CHE TI PERMETTE DI DARE VITA ALLA TUA IMMAGINAZIONE</h2>
            <p>
              Puoi avere una lista di tutti i personaggi creati, tenere traccia
              delle vittorie e sconfitte di ogni singolo personaggio ed avere
              una lista per rivedere tutti gli scontri.
            </p>
          </div>
          <div>
            <img src={SectionImg4} alt="Boruto Rasengan" />
          </div>
          <div className="star-container">
            <h2 className="star-text">Pronto a iniziare la tua avventura?</h2>
          </div>
          <button className="CreateCharater">Crea il Tuo Personaggio</button>
        </section>
      </article>
    </>
  );
};
// FOOTER-----------
