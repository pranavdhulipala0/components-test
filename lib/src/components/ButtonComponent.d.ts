import React from 'react';
type MyButtonProps = {
    title: string;
    onPress: () => void;
};
declare const ButtonComponent: React.FC<MyButtonProps>;
export default ButtonComponent;
