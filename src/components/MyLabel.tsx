import './MyLabel.css'
import { AllCaps } from '../stories/components/MyLabel.stories';

interface Props {
    /**
   * Is this the principal call to action on the page?
   * @default 'No label for this component'
   */
    label: string;
    /**
     * How size should the label be?
     * @default 'normal'
    */
    size: 'normal' | 'h1' | 'h2' | 'h3' ;

    /**
     * What color should the label text be?
     * @default 'primary'
     */
    color: 'primary' | 'secondary' | 'tertiary';

    /**
     * Should the label be all caps?
     * @default false
     */
    allCaps: boolean;

    /**
     * What color should the label text be?
     * @default '#5517ac'
     */
    fontColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
    label = 'No label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor,
}: Props) => {
    return (
        <span 
            className={`label ${size} text-${color}`} 
            style={{ color: fontColor }}
        >
            { 
                allCaps ? label.toUpperCase() : label 
            }
        </span>
    )
}
