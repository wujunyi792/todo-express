import { prop, defaultClasses } from '@typegoose/typegoose';
export class Todo extends defaultClasses.TimeStamps{
    @prop(({ required: true }))
    public name?: string
    @prop(({ required: true }))
    public status?: number
}