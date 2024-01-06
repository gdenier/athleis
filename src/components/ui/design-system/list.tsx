import { FlatList as DripsyFlatList } from "dripsy"
import { ComponentProps, ReactElement, Ref, forwardRef } from "react"
import { View } from "./view"

export type Render<T> = (props: { item: T }) => ReactElement | null
export type Key<T> = (item: T) => string

export type ListProps<T> = {
  data: T[]
  renderItem: Render<T>
  keyExtractor?: Key<T>
} & Omit<
  ComponentProps<typeof DripsyFlatList>,
  "data" | "renderItem" | "keyExtractor"
>

export const List = <T,>(props: ListProps<T>) => {
  return (
    <DripsyFlatList
      {...(props as any)}
      ItemSeparatorComponent={<View tw="h-6" />}
    />
  )
}
