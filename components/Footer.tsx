
const Footer = () => (
  <footer>
    <p>version: {process.env.version}</p>
    <style jsx>{`
      p {
        text-align: right;
        font-weight: 100;
      }
    `}</style>
  </footer>
);

export default Footer;