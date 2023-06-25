import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import English from "./pagesTrad/English";
import Francais from "./pagesTrad/Francais";

const App = () => {
    
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/english" element={<English />} />
                    <Route path="*" element={<Francais />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
