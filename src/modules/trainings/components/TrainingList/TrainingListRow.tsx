import { ReactElement, ReactNode, useMemo } from "react"
import { Text, View } from "~/components/ui/design-system"
import {
  Exercice,
  Dumbell,
  Running,
  Biceps,
  PlayOutline,
} from "~/components/ui/icons"
import { formatDuration } from "~/lib/utils"
import Training from "~/model/training"
import DropShadow from "react-native-drop-shadow"
import { shadow } from "~/theme/shadow"

type TrainingTypeStyle = { bg: string; icon: ReactNode }
const mappingTrainingTypeStyle: Record<string, TrainingTypeStyle> = {
  hiit: { bg: "sky", icon: <Running color="lynch.950" /> },
  strength: { bg: "royal", icon: <Biceps color="lynch.950" /> },
  musculation: { bg: "pumpkin", icon: <Dumbell color="lynch.950" /> },
}

export type TrainingListRowProps = {
  training: Training
}

export default function TrainingListRow({
  training,
}: TrainingListRowProps): ReactElement | null {
  const style = mappingTrainingTypeStyle["musculation"]

  const nbExercice = useMemo(() => {
    return 11
  }, [])
  const totalTime = useMemo(() => {
    return 1800
  }, [])

  return (
    <DropShadow style={shadow.bottom}>
      <View
        tw={`flex flex-row rounded-3xl border-2 border-${style.bg}-100 overflow-hidden bg-white`}
      >
        <View
          tw={`flex-1 flex flex-row p-4 gap-4 bg-${style.bg}-100 rounded-r-3xl`}
        >
          <View
            tw={`bg-${style.bg}-50 flex items-center justify-center aspect-square rounded-full`}
          >
            {style.icon}
          </View>
          <View tw="gap-4">
            <Text variant="text-2xl" sx={{ fontWeight: "semibold" }}>
              {training.title}
            </Text>
            <View tw="flex flex-row gap-4">
              <Text tw="text-lynch-600">{nbExercice} exercices</Text>
              <View tw={`w-px bg-${style.bg}-50`} />
              <Text tw="text-lynch-600 italic">
                {formatDuration(totalTime)}
              </Text>
            </View>
          </View>
        </View>
        <View tw="flex items-center justify-center p-4 text-lynch-950">
          <PlayOutline color="lynch.950" />
        </View>
      </View>
    </DropShadow>
  )
}
