import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle, Share2, ThumbsUp, Send, MoreHorizontal } from "lucide-react";
import { useState } from "react";

interface Comment {
  id: number;
  name: string;
  avatar: string;
  timeAgo: string;
  content: string;
  likes: number;
  isLiked: boolean;
}

const initialComments: Comment[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    avatar: "/lovable-uploads/b747f329-1f27-421d-8442-c38e48ed5c35.png",
    timeAgo: "2h",
    content: "This book literally changed my life! I've been dealing with chronic inflammation for years, and the herbal remedies in chapter 3 have given me more relief than any prescription medication. The garden planning section is pure gold - already started my healing herb garden!",
    likes: 127,
    isLiked: false
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    timeAgo: "5h",
    content: "As a practicing physician, I was skeptical at first. But the scientific backing and traditional wisdom combined in this handbook is impressive. I've started recommending some of these natural approaches to my patients alongside conventional treatment. Well researched and practical.",
    likes: 89,
    isLiked: false
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    timeAgo: "1d",
    content: "The emergency preparedness chapter saved my family during the recent storms! We had everything we needed to treat minor injuries and illnesses when the pharmacy was closed. Every parent should have this knowledge. Thank you for making it so accessible!",
    likes: 203,
    isLiked: false
  },
  {
    id: 4,
    name: "James Thompson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    timeAgo: "1d",
    content: "I'm a prepper and thought I knew everything about natural medicine, but this book taught me so much more. The plant identification guide alone is worth the price. My whole family is healthier since we started following these principles.",
    likes: 156,
    isLiked: false
  },
  {
    id: 5,
    name: "Lisa Wong",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    timeAgo: "2d",
    content: "Finally, a book that bridges ancient wisdom with modern understanding! The recipes are easy to follow and actually work. My anxiety has improved dramatically since I started the adaptogenic herb routine from chapter 7. Highly recommend!",
    likes: 174,
    isLiked: false
  },
  {
    id: 6,
    name: "Robert Davis",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    timeAgo: "3d",
    content: "My wife bought this for our anniversary (she knows I love gardening). Best gift ever! We've transformed our backyard into a medicinal garden and saved hundreds on healthcare costs. The seasonal preparation guides are incredibly detailed.",
    likes: 92,
    isLiked: false
  },
  {
    id: 7,
    name: "Maria Gonzalez",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    timeAgo: "4d",
    content: "As someone who can't afford regular doctor visits, this book has been a lifesaver. The home remedies for common ailments actually work, and the safety guidelines help me know when to seek professional help. Knowledge is truly power!",
    likes: 318,
    isLiked: false
  },
  {
    id: 8,
    name: "David Kumar",
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=face",
    timeAgo: "5d",
    content: "I'm a chef and the culinary medicine section opened my eyes to cooking for health, not just taste. My restaurant now features a 'healing menu' based on principles from this book. Customers love it and keep asking for the recipes!",
    likes: 145,
    isLiked: false
  },
  {
    id: 9,
    name: "Jennifer Adams",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    timeAgo: "1w",
    content: "This isn't just a book, it's a complete lifestyle transformation guide. My energy levels have skyrocketed, my skin is clearer, and I feel more connected to nature than ever. The community recipes section has become my go-to for everything!",
    likes: 267,
    isLiked: false
  }
];

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleLike = (commentId: number) => {
    setComments(prev => prev.map(comment => 
      comment.id === commentId 
        ? { 
            ...comment, 
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
          }
        : comment
    ));
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Math.max(...comments.map(c => c.id)) + 1,
        name: "You",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        timeAgo: "now",
        content: newComment,
        likes: 0,
        isLiked: false
      };
      setComments(prev => [comment, ...prev]);
      setNewComment("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddComment();
    }
  };

  return (
    <section className="py-12 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            What Our Readers Are Saying
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Join thousands who have transformed their health
          </p>
        </div>

        {/* Comment Input Box */}
        <div className="bg-card rounded-lg p-4 mb-6 border shadow-sm">
          <div className="flex space-x-3">
            <Avatar className="w-10 h-10 flex-shrink-0">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Your avatar" />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                Y
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="relative">
                <Input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Write a comment..."
                  className="w-full bg-muted border-0 rounded-full py-2 px-4 text-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary/20"
                />
                {newComment.trim() && (
                  <Button
                    size="sm"
                    onClick={handleAddComment}
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0 rounded-full bg-primary hover:bg-primary/90"
                  >
                    <Send className="w-3 h-3" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-0">
          {comments.map((comment, index) => (
            <div key={comment.id} className={`bg-card p-4 ${index === 0 ? 'rounded-t-lg' : ''} ${index === comments.length - 1 ? 'rounded-b-lg' : ''} ${index !== comments.length - 1 ? 'border-b border-border/50' : ''}`}>
              <div className="flex space-x-3">
                <Avatar className="w-10 h-10 flex-shrink-0">
                  <AvatarImage src={comment.avatar} alt={comment.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs">
                    {comment.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="bg-muted rounded-2xl px-3 py-2 inline-block max-w-[calc(100%-2rem)]">
                    <div className="font-semibold text-foreground text-sm mb-1">{comment.name}</div>
                    <p className="text-foreground text-sm leading-relaxed whitespace-pre-wrap">
                      {comment.content}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-1 ml-3">
                    <button
                      onClick={() => handleLike(comment.id)}
                      className={`text-xs font-medium ${
                        comment.isLiked 
                          ? 'text-primary' 
                          : 'text-muted-foreground hover:text-foreground'
                      } transition-colors`}
                    >
                      Like
                    </button>
                    <button className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                      Reply
                    </button>
                    <span className="text-xs text-muted-foreground">{comment.timeAgo}</span>
                    <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <MoreHorizontal className="w-3 h-3" />
                    </button>
                  </div>
                  
                  {comment.likes > 0 && (
                    <div className="flex items-center space-x-1 mt-1 ml-3">
                      <div className="flex items-center space-x-1 bg-primary/10 rounded-full px-2 py-0.5">
                        <ThumbsUp className={`w-3 h-3 ${comment.isLiked ? 'text-primary fill-current' : 'text-primary'}`} />
                        <span className="text-xs text-primary font-medium">{comment.likes}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            View more comments
          </Button>
        </div>
      </div>
    </section>
  );
}