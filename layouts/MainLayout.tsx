import Header from '../components/Header';
import Footer from '../components/Footer';

const style = <style>{`
  div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  main {
    flex-grow: 1;
  }

`}

</style>

const MainLayout:  React.FunctionComponent = (props) => (
  <div>
    <Header />
    <main>{props.children}</main>
    <Footer />
    {style}
  </div>
);

export default MainLayout;