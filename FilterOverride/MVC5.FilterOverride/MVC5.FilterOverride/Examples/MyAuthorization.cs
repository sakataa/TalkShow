using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Filters;

namespace MVC5.FilterOverride.Examples
{
    public class MyAuthorization: FilterAttribute, IOverrideFilter
    {

        public Type FiltersToOverride
        {
            get 
            { 
                return typeof(IAuthorizationFilter); 
            }
        }
    }
}