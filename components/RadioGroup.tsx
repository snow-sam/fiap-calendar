import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
export const RadioGroupComponent = () => {
    return (
        <RadioGroup className="flex" defaultValue="Prova">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="Prova" id="Prova" />
                <Label htmlFor="Prova">Prova</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="Importante" id="Importante" />
                <Label htmlFor="Importante">Importante</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="Normal" id="Normal" />
                <Label htmlFor="Normal">Normal</Label>
            </div>
        </RadioGroup>
    )
}
