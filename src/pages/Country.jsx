import React from 'react'

const Country = () => {
    // 나라 이름 배열
    const countries = ["South Korea", "France", "Brazil", "Canada", "Germany", "Japan", "Australia", "Mexico", "Russia", "India"];

    // 카드 데이터 배열
    const cards = [
        { title: "[KPOP RANDOM PLAY DANCE] JAPAN EXPO SUD MARSEILLE 2024 | FRANCE", videoId: "-fMsEmeGsO8" },
        { title: "[KPOP IN PUBLIC] - RANDOM PLAY DANCE 랜덤플레이댄스 | From Recife Brazil 2024", videoId: "niUpyx-hfhQ" },
        { title: "[KPOP IN PUBLIC LA] 1 HOUR Random Play Dance 2023 (90+ SONGS!) @ 626 Night Market | SHERO", videoId: "6q8NjFSjqh0" },
        { title: "[IN PUBLIC] K-POP RANDOM PLAY DANCE in Nice, FRANCE (PART 1) - CAP3000 [17.02.2024]", videoId: "rcL6Z2_WxXM" },
        { title: "MÉGA KPOP RANDOM - TOULOUSE MARCH 2024", videoId: "cNdjZTtHNyc" },
        { title: "[KPOP IN PUBLIC] WE MADE RANDOM DANCE in PHỐ ĐI BỘ | By MAD-X", videoId: "9DUzwKvnFf0" },
        { title: "[4K] K-pop Random Dance in Public /Berlin, Germany", videoId: "RVZ-TaHJ_c4" },
        { title: "[KPOP IN PUBLIC] WE MADE KPOP RANDOM DANCE PLAY BY MAD-X ROUND 1 | AT HANOI WALKING STREET", videoId: "DgIv_W1jtks" },
        { title: "KPOP RANDOM PLAY DANCE IN PUBLIC [SPAIN] by BlackOut (valentine's vers.)", videoId: "GvMvfT7aGic" },
        { title: "[KPOP RPD IN PUBLIC] KPOP RANDOM PLAY DANCE (랜덤플레이댄스) in Birmingham, UK", videoId: "b1F6aznQw00" },
        { title: "K-POP RANDOM DANCE in France (TOULOUSE) | FJE x MINISO", videoId: "gX3Xovs8Ghk" },
        { title: "[KPOP IN PUBLIC] RANDOM PLAY DANCE at UC SAN DIEGO - K-pop & More | Winter Wonder-Dance 2024 Pt 1", videoId: "ZXIYhzElQwo" }
    ];

    return (
        <>
            <section className='section__title container'>
                <h2>K-Pop Universe<br />What the community is <em>saying</em></h2>
            </section>
            <section className='country__inner container'>
                <h3 className='blind'>country</h3>
                <div className="country__menu">
                    <ul>
                        {countries.map(country => (
                            <li key={country}><a href="/">{country}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="card__list mt50" role="list">
                    {cards.map((card, index) => (
                        <div className='card' role='listitem' key={index}>
                            <div className='card__video'>
                                <iframe src={`https://www.youtube.com/embed/${card.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className='card__title'>
                                <h4>{card.title}</h4>
                            </div>
                            <div className='card__view'>
                                <a href="/" className='view'>view</a>
                                <a href="/" className='comm'>Community</a>
                                <button className='like'><span className='blind'>like</span></button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Country