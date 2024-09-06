import { infoData } from '../data/articles';
import Accordion from './shared/Accordion';

const Info = () => {
  const articles = infoData.articles.map((article) => {
    return (
      <article
        className='lg:basis-[576px]'
        key={article.title}
      >
        <Accordion
          title={article.title}
          text={article.text}
        />
      </article>
    );
  });
  return (
    <section className='bg-dark-primary text-light-secondary section-padding'>
      <div className='container flex flex-col gap-12 lg:basis-1/2 lg:flex-row py-[88px]'>{articles}</div>
    </section>
  );
};
export default Info;
