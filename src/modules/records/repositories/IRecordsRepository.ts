import Record from '../infra/typeorm/schemas/Record';

export default interface IRecordsRepository {
  create(name: string, value: number): Promise<Record>;
  update(name: string, value?: number): Promise<Record>;
  show(name: string | undefined): Promise<Record | undefined>
}
