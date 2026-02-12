import {CalendarViewport} from "./components/CalendarViewport";

function App() {
  return (
    <CalendarViewport>
      <div
        className="w-[520px] h-[420px] bg-white rounded-2xl"
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: '0 40px 120px rgba(0,0,0,0.12)',
        }}
      />
    </CalendarViewport>
  )
}

export default App
