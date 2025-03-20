import { FormField, FormItem } from '@/components/ui/form';

const StarFilter = ({ form }) => {
  return (
    <div className="p-3 border-t border-border">
      <div className="mb-3">
        <h4 className="text-sm font-semibold">Star Category</h4>
      </div>
      <FormField
        control={form.control}
        name="starCategory"
        render={({ field }) => <FormItem></FormItem>}
      ></FormField>
    </div>
  );
};

export default StarFilter;
