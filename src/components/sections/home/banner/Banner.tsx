import Styles from "./Banner.module.scss";

export default function HomeHomeBanner() {
  return (
    <section
      id="home-banner"
      className={`hero is-fullheight ${Styles.HomeBanner}`}
    >
      <div className={`hero-body ${Styles.HomeBannerBody}`}>
        <span
          className={`title is-1 has-text-centered ${Styles.HomeBannerTitle}`}
        >
          Trouvez votre harmonie intérieure
        </span>
        {/* @!component('../components/gotolink.edge', {
                path: '#why',
                htmlText: '',
                color: 'light'
        }) */}
      </div>
    </section>
  );
}
