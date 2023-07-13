import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/check.svg').default,
    description: (
      <>
        Get started in 5 minutes. Vinted Bot is easy to use and configure.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
        Vinted Bot lets you focus on your business, and we&apos;ll do the chores. Go ahead and build your business on top of Vinted Bot.
      </>
    ),
  },
  {
    title: 'Powered by Rust',
    Svg: require('@site/static/img/rust.svg').default,
    description: (
      <>
        Vinted Bot is powered by Rust, a fast and safe programming language that allows for unparalleled performance.
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
