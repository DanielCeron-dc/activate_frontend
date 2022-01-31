import React, { useState } from 'react';



const useWindow = (): {isMobile:boolean, isTablet:boolean, isDesktop:boolean} => {
    
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);
    

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 700) {
                setIsMobile(true);
                setIsTablet(false);
                setIsDesktop(false);
            }
            else if (window.innerWidth < 992) {
                setIsMobile(false);
                setIsTablet(true);
                setIsDesktop(false);
            }
            else {
                setIsMobile(false);
                setIsTablet(false);
                setIsDesktop(true);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    return { isMobile, isTablet, isDesktop  }; 
}
export default useWindow;