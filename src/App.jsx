// In your application
import ComponentFactory from 'this.gui';

function App() {
  return (
    <div>
      <ComponentFactory
        componentName="Navbar"
        user={{ name: 'John Doe' }}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
    </div>
  );
}