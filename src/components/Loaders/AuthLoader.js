import { Box } from 'components/Box';
import { RotatingLines  } from 'react-loader-spinner';

const AuthLoader = () => {
    return (
        <Box
             position="absolute"
            top="50%"
            left="50%"
        >
            <RotatingLines
               position='relative'
                width="100"
                strokeColor="gray"
                strokeWidth="5"
                animationDuration="1"
                visible={true}
            />
        </Box>
    )
           
};

export default AuthLoader;