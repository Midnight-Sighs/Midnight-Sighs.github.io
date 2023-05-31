import { MainText } from './MainText';

/** This is a sample doc */
export default {
    title: "Main Text Component",
    component: MainText,
    tags: ['autodocs'],
    argTypes:{
        title: {
            name: "Title",
            description: "The largest, center font of the component",
            
            control: {
                type: "text"
            },
            type: {required: true},
            table: {
                category: "Names",
                name: "Another Name",
                type: {
                    required: true,
                    name: "type name",
                    summary: "string",
                    detail: "description of the string"
                },
                defaultValue: {summary: "Rawr", detail: "this is the default value detail"}
            }
        },
        topText: {
            name: "Top Text",
            description: "The small text above the icons",
            control: {
                type: "text"
            },
            table: {
                type: {summary: "string"},
                defaultValue: {summary: "Stuff"}
            }
        },
        subTitle:{
            name: "Subtitle",
            description: "the bottom text",
            control: {
                type: "text"
            },
            table:{
                type: {
                    
                }
            }
        }
    }
}

export const Story = {
    args: {
        title:"Midnight",
        topText: "!! PAGE UNDER CONSTRUCTION !!",
        subTitle: "AKA Arreis Kurai"
    },
}

export const NatalieStory = {
    args: {
        title:"Natalie",
        topText: "This is a page",
        subTitle: "She's the best!"
    }
}

export const LeoStory ={
    render: () => <MainText title="Leo" topText="I'm Cool" subTitle="I'm a Code Guy" />
}