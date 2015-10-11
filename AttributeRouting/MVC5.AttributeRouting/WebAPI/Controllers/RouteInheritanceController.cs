using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Routing;

namespace WebAPI.Controllers
{
    public class CustomDirectRouteProvider : DefaultDirectRouteProvider
    {
        protected override IReadOnlyList<IDirectRouteFactory> GetActionRouteFactories(HttpActionDescriptor actionDescriptor)
        {
            // inherit route attributes decorated on base class controller's actions
            return actionDescriptor.GetCustomAttributes<IDirectRouteFactory>(inherit: true);
        }
    }
  
    public class BaseRouteController : ApiController
    {
        [Route("Index/{id:int}")]
        public string GetIndex(int id)
        {
            return "Routing Inheritance " + id;
        }
    }

    [RoutePrefix("MVC/V1")]
    public class RouteInheritanceController : BaseRouteController
    {
        [Route("Index1/{id:int}")]
        [HttpGet]
        public string Index(int id)
        {
            return "Routing Inheritance GetIndex1 method" + id;
        }
	}
}