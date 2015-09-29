using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC5.AttributeRouting.Startup))]
namespace MVC5.AttributeRouting
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
