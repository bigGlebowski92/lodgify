import { UserCard } from './components/UserCard';
import { UserWidgetProvider } from './UserWidgetContext';

function App() {
  return (
    <UserWidgetProvider>
      <UserCard />
    </UserWidgetProvider>
  );
}

export default App;
