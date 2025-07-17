export default function Footer() {
  return <footer className="bg-background border-t py-12 pb-32 md:pb-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-healing-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">NH</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Natural Healing Hub</span>
            </div>
            <p className="text-muted-foreground">
              Empowering your journey to natural wellness through time-tested remedies and modern wisdom.
            </p>
          </div>

          {/* Quick Links */}
          

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="text-muted-foreground space-y-2">
              <p>support@naturalmedicinebook.com</p>
              <p>© 2025 Natural Healing Hub</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}