import * as React from 'react';

import Layout from '../components/layout';

export default class TestimonialsPage extends React.Component<{}, {}> {
    private scrollRef: React.RefObject<HTMLButtonElement> =
        React.createRef<HTMLButtonElement>();

    override render() {
        return (
            <Layout title="Testimonials">
                <section className="hero is-medium has-text-centered">
                    <div className="hero-body">
                        <div className="column">
                            <h1 className="title is-size-2-1 is-size-2-mobile is-1 mb-6">
                                See the
                                <br />
                                Testimonials.
                            </h1>
                            <button
                                aria-label="Scroll Down"
                                className="button is-medium mt-6 is-black is-inverted is-bouncing"
                                onClick={() =>
                                    this.scrollRef.current?.scrollIntoView()
                                }
                                ref={this.scrollRef}
                            >
                                <span className="icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        fill="#fff"
                                    >
                                        <path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification is-info is-focusable">
                                    <h3 className="title">Pavan</h3>
                                    <h4 className="subtitle">
                                        Spondylitis Patient
                                    </h4>
                                    <p className="content">
                                        Amazing results in thirty days! After
                                        Divakar's special encouragement and
                                        cooperation, I am leading a pain-free
                                        life now.
                                    </p>
                                </article>
                                <article className="tile is-child notification is-danger is-focusable">
                                    <h3 className="title">Dr. Rajasekhar</h3>
                                    <h4 className="subtitle">
                                        Consulting Physician
                                    </h4>
                                    <p className="content">
                                        Good personal trainer. Very committed
                                        and supporting throughout the fitness
                                        program.
                                    </p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-primary is-focusable">
                                    <h3 className="title">Manobhiram</h3>
                                    <h4 className="subtitle">Gym Member</h4>
                                    <p className="content">
                                        Initial Weight: &nbsp;91 kg.
                                        <br />
                                        After 60 Days: &nbsp;82 kg
                                        <br />
                                        <br />I had a bad opinion about having a
                                        personal trainer when I first joined the
                                        gym. Divakar proved me wrong and gave a
                                        customized fitness training program.
                                        <br />
                                        <br />
                                        Divakar is very supportive, friendly and
                                        professional gentleman. Thanks to him, I
                                        was able to meet my goals of weight loss
                                        and get stronger. I would definitely
                                        recommend Divakar as a trainer for a
                                        weight control program.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info is-focusable">
                                <h3 className="title">Harika</h3>
                                <h4 className="subtitle">Gym Member</h4>
                                <p className="content">
                                    When I first joined the gym, I was unable to
                                    do any exercises and decided to quit.
                                    Divakar encouraged me to continue gym and
                                    and planned a 30 day workout plan to see the
                                    most satisfying results. My stamina and
                                    confidence levels increased. I really thank
                                    Divakar for the encouragement.
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-danger is-focusable">
                            <h3 className="title">Reshma</h3>
                            <h4 className="subtitle">
                                Asthma and PCOD Patient
                            </h4>
                            <p className="content">
                                Previously, I tried various methods like
                                dieting, yoga, etc yet couldn't get any results.
                                As I started developing knee pains and
                                restlesness, I decided to join a gym with Mr.
                                Divakar as my personal trainer and immediately
                                felt difference in my daily activities.
                                <br />
                                <br />I joined on January 22<sup>nd</sup> and
                                spite of being an asthma and PCOD patient, I
                                reduced over 5 kg of weight within 3 weeks.
                                Initially, I started off slowly. But, with kind,
                                proper guidance from Divakar, I was soon able to
                                do all the tougher and advanced workouts like
                                the other gym members.
                                <br />
                                <br />
                                This is the first time in my life that I am
                                loosing this much weight in such a short span of
                                time. I am finally able to stay healthy and
                                strong. I sincerely thank my personal trainer,
                                Mr. Divakar, who stood behind me and motivated
                                me to reach this level.
                            </p>
                        </article>
                    </div>
                </section>
            </Layout>
        );
    }
}
