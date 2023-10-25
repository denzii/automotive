import './App.scss';

function App() {
	return (
		<div className="app">
			<main className="app__main">
				{/* app navigation bar */}
				<header className="main__header">
					<nav className="header__nav">
						<ul className="nav__ul">
							<li className="ul__li">Home</li>
							<li className="ul__li">About</li>
							<li className="ul__li">Contact</li>
						</ul>
					</nav>
				</header>
				<hr/> {/* replace with custom hr elem if needed to match target design */}

				{/* hero section */}
				<section className="main__hero">
					<h1 className="hero__heading">DEDWER DTANG TERICH</h1>
					<h2 className="hero__subheading">TEHEBUS DOLGER</h2>
					<h3 className="hero__details">Lorem ipsum dolor sit amed</h3>
					<button className="hero_cta">Call To Action</button>
				</section>

				{/* intro section with links and high priority content */}
				<section className='main__intro'>
					<aside className="intro__image">
						<img>
						</img>
					</aside>
					<section className="intro__section">
						<img className="section__icon"></img>
						<article className="section__article">
							<p className="article__p">Loerm ipsum dolor sit</p>
							<button className="article__button"></button>
						</article>
					</section>
					<section className="intro__section">
						<img className="section__icon"></img>
						<article className="section__article">
							<p className="article__p">Loerm ipsum dolor sit</p>
							<button className="article__button"></button>
						</article>
					</section>
				</section>

				{/* supplementary section with medium priority content  */}
				<section className="main__supplemental">
					{/* there should be cards here, icon and body text and a button on each card */}
					<img className="supplemental__icon">
						
					</img>
				</section>

				{/* outro section with aesthetic but low priority content */}
				<section className="main__outro">
					{/* there should be cards here, header text and an image on each card */}

				</section>

				{/* footer */}
				<footer className="main__footer">

				</footer>
			</main>
			
		</div>
	);
}

export default App;
