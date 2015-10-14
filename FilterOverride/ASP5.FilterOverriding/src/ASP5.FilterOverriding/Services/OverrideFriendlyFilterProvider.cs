using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace ASP5.FilterOverriding.Services
{
    public class OverrideFriendlyFilterProvider : INestedProvider<FilterProviderContext>
    {
        //all framework providers have negative orders, so ours will come later
        public int Order => 0;

        public void Invoke(FilterProviderContext context, Action callNext)
        {
            //let the whole provider pipeline run first
            if (callNext != null)
            {
                callNext();
            }

            if (context.ActionContext.ActionDescriptor.FilterDescriptors != null)
            {
                var overrideFilters = context.Results.Where(filterItem => filterItem.Filter is OverrideFilter).ToArray();
                foreach (var overrideFilter in overrideFilters)
                {
                    context.Results.RemoveAll(filterItem =>
                    filterItem.Descriptor.Filter.GetType() == ((OverrideFilter)overrideFilter.Filter).Type &&
                    filterItem.Descriptor.Scope <= overrideFilter.Descriptor.Scope);
                }
            }
        }
    }

    public interface INestedProvider<T>
    {
        int Order { get; }
        void Invoke(T context, Action callNext);
    }
    public class OverrideFilter : ActionFilterAttribute
    {
        public Type Type { get; set; }
    }
}
