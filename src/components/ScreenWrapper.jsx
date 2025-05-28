import BottomNav from './BottomNav';

function ScreenWrapper({ children }) {
  return (
    <div style={{ paddingBottom: '72px' }}>
      {children}
      <BottomNav />
    </div>
  );
}

export default ScreenWrapper;
