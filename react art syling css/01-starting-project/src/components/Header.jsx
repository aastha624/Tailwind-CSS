// import {styled} from 'styled-components';

import logo from '../assets/logo.png';
// import './Header.css';

// const styleHeader=styled.header`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin-top: 2rem;
//     margin-bottom: 2rem;


//     & img {
//       object-fit: contain;
//       margin-bottom: 2rem;
//       width: 11rem;
//       height: 11rem;
//     }
    
//     &  h1 {
//       font-size: 1.5rem;
//       font-weight: 600;
//       letter-spacing: 0.4em;
//       text-align: center;
//       text-transform: uppercase;
//       color: #9a3412;
//       font-family: 'Pacifico', cursive;
//       margin: 0;
//     }
    
//    &  p {
//       text-align: center;
//       color: #a39191;
//       margin: 0;
//     }
    
//     @media (min-width: 768px) {
      
//         margin-bottom: 4rem;
      
    
//      & h1 {
//         font-size: 2.25rem;
//       }
//     }
    
    
// `;
// create custom header--ahiya je rite control style nu karyu ae rite header nu header component na jsx ma karavanu
export default function Header() {
  return (
    // <styleHeader>

    // here add the tailwind css with className


    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo} alt="A canvas" className="object-containmb-8 w-44 h-44"/>
      <h1 className="text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 ">ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
      {/* </styleHeader>
       */}
       </header>
  );
}
