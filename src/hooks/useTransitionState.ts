import animation from '../assets/animations/pageAnimation.module.scss';

const useTransitionState = (status: string): string => {
    const setTransitionAnimation = (state: string) => {
        switch (state) {
            case 'entering':
                return animation.entering;
            case 'entered':
                return animation.entered;
            case 'exiting':
                return animation.exiting;
            case 'exited':
                return animation.exited;
            default:
                return '';
        }
    };

    return setTransitionAnimation(status);
};

export default useTransitionState;
