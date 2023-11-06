export default function examplePage() {
    return (
        <div className='container'>
            <title>Website</title>
            <link rel='icon' href='/favicon.ico' />

            <main>
                <div className='underline'>
                    <h1 className='title'>Hey, I'm Jason. </h1>
                </div>
                <img
                    className='pic'
                    src='https://media.licdn.com/dms/image/D5603AQGu2PiUwYHLpQ/profile-displayphoto-shrink_800_800/0/1696027325398?e=1704326400&v=beta&t=_aTScXop5X3txcHRVEkRmNfz1XcFG9dt1j89sJ8ZeKE'
                    alt='tom holland'
                />

                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ridiculus mus mauris
                    vitae ultricies leo. Facilisi nullam vehicula ipsum a arcu cursus vitae
                    congue. Amet consectetur adipiscing elit pellentesque habitant morbi.
                    Faucibus vitae aliquet nec ullamcorper. Ligula ullamcorper malesuada proin libero
                    nunc consequat interdum varius sit. Lacinia quis vel eros donec ac odio tempor orci.
                </p>

                <a className='button' href='/'>
                    <p> Back to Home Page</p>
                </a>
            </main>

            <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
            
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

            <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
        </div>
    );
}