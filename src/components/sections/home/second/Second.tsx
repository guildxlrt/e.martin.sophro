import Styles from "./Second.module.scss";

export default function HomeSecond() {
  return (
    <section id="home-second" class="hero is-medium is-light">
      <div
        className={`hero-header has-text-centered ${Styles.HomeSecondHeader}`}
      >
        <h2 class="title is-3">
          Devenez acteur de votre mieux-être au quotidien
        </h2>
      </div>
      <div class="hero-body subtitle is-5 has-text-centered">
        <div class="columns is-mobile is-multiline" style="position: relative;">
          {/* @!component('../components/home/bubble.edge', {
                    imgUrl: '/pictures/home/stress.webp',
                    imgPosition: "0%",
                    imgSize: "cover",
                    spanTxt: "Stress"
                })
                @!component('../components/home/bubble.edge', {
                    imgUrl: '/pictures/home/anxiety.webp',
                    imgPosition: "52%",
                    imgSize: "cover",
                    spanTxt: "Anxiété"
                })
                @!component('../components/home/bubble.edge', {
                    imgUrl: '/pictures/home/emotions.webp',
                    imgPosition: "45%",
                    imgSize: "cover",
                    spanTxt: "Émotions"
                })
                @!component('../components/home/bubble.edge', {
                    imgUrl: '/pictures/home/exams.webp',
                    imgPosition: "90%",
                    imgSize: "200%",
                    spanTxt: "Préparation mentale"
                })
                @!component('../components/home/bubble.edge', {
                    imgUrl: '/pictures/home/sleep.webp',
                    imgPosition: "20%",
                    imgSize: "cover",
                    spanTxt: "Sommeil"
                })
                @!component('../components/home/bubble.edge', {
                    imgUrl: '/pictures/home/welfare.webp',
                    imgPosition: "80%",
                    imgSize: "cover",
                    spanTxt: "Mieux être quotidien"
                })
                @!component('../components/home/bubble.edge', {
                    imgUrl: '/pictures/home/self-worth.webp',
                    imgPosition: "0%",
                    imgSize: "100%",
                    spanTxt: "Confiance et estime de soi"
                })
                @!component('../components/home/bubble.edge', {
                    imgUrl: '/pictures/home/journey.webp',
                    imgPosition: "60%",
                    imgSize: "cover",
                    spanTxt: "Franchir les étapes de la vie"
                }) */}
        </div>
      </div>
      <div class={`hero-footer ${Styles.HomeSecondFooter}`}>
        <span class="subtitle is-4">
          Les champs d'applications de la sophrologie sont multiples
        </span>
        <div class="container" style="padding-top: 32px;">
          {/* @!component('../components/gotolink.edge', {
                    path: '#who',
                    htmlText: '',
                    color: 'info'
                }) */}
        </div>
      </div>
    </section>
  );
}
