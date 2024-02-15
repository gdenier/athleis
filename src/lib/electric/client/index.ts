import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const ExerciceScalarFieldEnumSchema = z.enum(['id','name']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// EXERCICE SCHEMA
/////////////////////////////////////////

export const ExerciceSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type Exercice = z.infer<typeof ExerciceSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// EXERCICE
//------------------------------------------------------

export const ExerciceSelectSchema: z.ZodType<Prisma.ExerciceSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ExerciceWhereInputSchema: z.ZodType<Prisma.ExerciceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ExerciceWhereInputSchema),z.lazy(() => ExerciceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExerciceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExerciceWhereInputSchema),z.lazy(() => ExerciceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ExerciceOrderByWithRelationInputSchema: z.ZodType<Prisma.ExerciceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExerciceWhereUniqueInputSchema: z.ZodType<Prisma.ExerciceWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const ExerciceOrderByWithAggregationInputSchema: z.ZodType<Prisma.ExerciceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ExerciceCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ExerciceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ExerciceMinOrderByAggregateInputSchema).optional()
}).strict();

export const ExerciceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ExerciceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ExerciceScalarWhereWithAggregatesInputSchema),z.lazy(() => ExerciceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExerciceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExerciceScalarWhereWithAggregatesInputSchema),z.lazy(() => ExerciceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ExerciceCreateInputSchema: z.ZodType<Prisma.ExerciceCreateInput> = z.object({
  id: z.string(),
  name: z.string()
}).strict();

export const ExerciceUncheckedCreateInputSchema: z.ZodType<Prisma.ExerciceUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string()
}).strict();

export const ExerciceUpdateInputSchema: z.ZodType<Prisma.ExerciceUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ExerciceUncheckedUpdateInputSchema: z.ZodType<Prisma.ExerciceUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ExerciceCreateManyInputSchema: z.ZodType<Prisma.ExerciceCreateManyInput> = z.object({
  id: z.string(),
  name: z.string()
}).strict();

export const ExerciceUpdateManyMutationInputSchema: z.ZodType<Prisma.ExerciceUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ExerciceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ExerciceUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const ExerciceCountOrderByAggregateInputSchema: z.ZodType<Prisma.ExerciceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExerciceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ExerciceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExerciceMinOrderByAggregateInputSchema: z.ZodType<Prisma.ExerciceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ExerciceFindFirstArgsSchema: z.ZodType<Prisma.ExerciceFindFirstArgs> = z.object({
  select: ExerciceSelectSchema.optional(),
  where: ExerciceWhereInputSchema.optional(),
  orderBy: z.union([ ExerciceOrderByWithRelationInputSchema.array(),ExerciceOrderByWithRelationInputSchema ]).optional(),
  cursor: ExerciceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ExerciceScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ExerciceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ExerciceFindFirstOrThrowArgs> = z.object({
  select: ExerciceSelectSchema.optional(),
  where: ExerciceWhereInputSchema.optional(),
  orderBy: z.union([ ExerciceOrderByWithRelationInputSchema.array(),ExerciceOrderByWithRelationInputSchema ]).optional(),
  cursor: ExerciceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ExerciceScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ExerciceFindManyArgsSchema: z.ZodType<Prisma.ExerciceFindManyArgs> = z.object({
  select: ExerciceSelectSchema.optional(),
  where: ExerciceWhereInputSchema.optional(),
  orderBy: z.union([ ExerciceOrderByWithRelationInputSchema.array(),ExerciceOrderByWithRelationInputSchema ]).optional(),
  cursor: ExerciceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ExerciceScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ExerciceAggregateArgsSchema: z.ZodType<Prisma.ExerciceAggregateArgs> = z.object({
  where: ExerciceWhereInputSchema.optional(),
  orderBy: z.union([ ExerciceOrderByWithRelationInputSchema.array(),ExerciceOrderByWithRelationInputSchema ]).optional(),
  cursor: ExerciceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ExerciceGroupByArgsSchema: z.ZodType<Prisma.ExerciceGroupByArgs> = z.object({
  where: ExerciceWhereInputSchema.optional(),
  orderBy: z.union([ ExerciceOrderByWithAggregationInputSchema.array(),ExerciceOrderByWithAggregationInputSchema ]).optional(),
  by: ExerciceScalarFieldEnumSchema.array(),
  having: ExerciceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ExerciceFindUniqueArgsSchema: z.ZodType<Prisma.ExerciceFindUniqueArgs> = z.object({
  select: ExerciceSelectSchema.optional(),
  where: ExerciceWhereUniqueInputSchema,
}).strict() 

export const ExerciceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ExerciceFindUniqueOrThrowArgs> = z.object({
  select: ExerciceSelectSchema.optional(),
  where: ExerciceWhereUniqueInputSchema,
}).strict() 

export const ExerciceCreateArgsSchema: z.ZodType<Prisma.ExerciceCreateArgs> = z.object({
  select: ExerciceSelectSchema.optional(),
  data: z.union([ ExerciceCreateInputSchema,ExerciceUncheckedCreateInputSchema ]),
}).strict() 

export const ExerciceUpsertArgsSchema: z.ZodType<Prisma.ExerciceUpsertArgs> = z.object({
  select: ExerciceSelectSchema.optional(),
  where: ExerciceWhereUniqueInputSchema,
  create: z.union([ ExerciceCreateInputSchema,ExerciceUncheckedCreateInputSchema ]),
  update: z.union([ ExerciceUpdateInputSchema,ExerciceUncheckedUpdateInputSchema ]),
}).strict() 

export const ExerciceCreateManyArgsSchema: z.ZodType<Prisma.ExerciceCreateManyArgs> = z.object({
  data: ExerciceCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const ExerciceDeleteArgsSchema: z.ZodType<Prisma.ExerciceDeleteArgs> = z.object({
  select: ExerciceSelectSchema.optional(),
  where: ExerciceWhereUniqueInputSchema,
}).strict() 

export const ExerciceUpdateArgsSchema: z.ZodType<Prisma.ExerciceUpdateArgs> = z.object({
  select: ExerciceSelectSchema.optional(),
  data: z.union([ ExerciceUpdateInputSchema,ExerciceUncheckedUpdateInputSchema ]),
  where: ExerciceWhereUniqueInputSchema,
}).strict() 

export const ExerciceUpdateManyArgsSchema: z.ZodType<Prisma.ExerciceUpdateManyArgs> = z.object({
  data: z.union([ ExerciceUpdateManyMutationInputSchema,ExerciceUncheckedUpdateManyInputSchema ]),
  where: ExerciceWhereInputSchema.optional(),
}).strict() 

export const ExerciceDeleteManyArgsSchema: z.ZodType<Prisma.ExerciceDeleteManyArgs> = z.object({
  where: ExerciceWhereInputSchema.optional(),
}).strict() 

interface ExerciceGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ExerciceArgs
  readonly type: Prisma.ExerciceGetPayload<this['_A']>
}

export const tableSchemas = {
  Exercice: {
    fields: new Map([
      [
        "id",
        "TEXT"
      ],
      [
        "name",
        "TEXT"
      ]
    ]),
    relations: [
    ],
    modelSchema: (ExerciceCreateInputSchema as any)
      .partial()
      .or((ExerciceUncheckedCreateInputSchema as any).partial()),
    createSchema: ExerciceCreateArgsSchema,
    createManySchema: ExerciceCreateManyArgsSchema,
    findUniqueSchema: ExerciceFindUniqueArgsSchema,
    findSchema: ExerciceFindFirstArgsSchema,
    updateSchema: ExerciceUpdateArgsSchema,
    updateManySchema: ExerciceUpdateManyArgsSchema,
    upsertSchema: ExerciceUpsertArgsSchema,
    deleteSchema: ExerciceDeleteArgsSchema,
    deleteManySchema: ExerciceDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ExerciceCreateInputSchema>,
    Prisma.ExerciceCreateArgs['data'],
    Prisma.ExerciceUpdateArgs['data'],
    Prisma.ExerciceFindFirstArgs['select'],
    Prisma.ExerciceFindFirstArgs['where'],
    Prisma.ExerciceFindUniqueArgs['where'],
    never,
    Prisma.ExerciceFindFirstArgs['orderBy'],
    Prisma.ExerciceScalarFieldEnum,
    ExerciceGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
