import { Link } from "expo-router"
import { TrainingList } from "~/modules/trainings/components/TrainingList"
import { Button, ButtonIcon, Text, View } from "~/components/ui/design-system"
import { SectionTitle } from "~/components/SectionTitle"
import { AddCircledOutline } from "~/components/ui/icons"

export default function TrainingHomeScreen() {
  return (
    <View tw="flex-1 bg-white px-2 pt-4 flex flex-col gap-4">
      <SectionTitle
        addon={
          <Link href="/(app)/trainings/add_training" asChild>
            <Button variant="primary" icon={<AddCircledOutline />} />
          </Link>
        }
      >
        Mes séances
      </SectionTitle>
      <TrainingList />
    </View>
  )
}
