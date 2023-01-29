import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '記錄我的生活',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜。
      </>
    ),
  },
  {
    title: '寫下我的歷程',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜。<code>print(87)</code> 阿拉花瓜阿拉花瓜阿拉花瓜。.
      </>
    ),
  },
  {
    title: '實現我的理想',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜阿拉花瓜。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
