import React, { Component } from 'react'

export default class About extends Component {
    componentDidMount() {
        document.title = document.title = this.props.route.title
    }
    render() {
        return (
            <section className="main-about">
                <div className="content">
                    <div className="main-about-text">
                        <div className="block">
                            <h3 className="main-about__title">Немного о нас</h3>
                            <p>%NAME% - современное агентство дизайна и цифровых проектов. Мы считаем себя представителем нового поколения: открытым, несложным, 100% цифровым.</p>
                            <p>Мы разрабатываем наши проекты вместе со стратегией, дизайном и UX, используя только современные технологии в области программирования и автоматизации.</p>
                            <p>«Продвижение вперед» — это наше кредо и наша философия. Это относится не только к нашему собственному желанию постоянно развивать наши навыки, но также является выражением того, как мы смотрим на каждый проект с нового ракурса, добиваясь результатов, которые впечатляют.</p>
                        </div>
                        <div className="block">
                            <h3 className="main-about__title">Обратная связь</h3>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}