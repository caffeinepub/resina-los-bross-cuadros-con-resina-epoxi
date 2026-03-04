import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import Map "mo:core/Map";
import Text "mo:core/Text";
import List "mo:core/List";



actor {
  let storage = Storage.new();
  include MixinStorage(storage);

  type ResinArtPiece = {
    id : Text;
    title : Text;
    description : Text;
    image : Storage.ExternalBlob;
    resinEffect : Bool;
    resinThickness : ?Nat;
    frameMaterial : ?Text;
    isTriptych : Bool;
    isFragmented : Bool;
    isVanGogh : Bool;
    isNew : Bool;
  };

  type StudioInfo = {
    phone : Text;
    email : Text;
    address : Text;
    distribution : Text;
  };

  type AboutSection = {
    title : Text;
    content : Text;
  };

  var resinArtPieces = Map.empty<Text, ResinArtPiece>();
  var studioInfo : ?StudioInfo = null;
  var aboutSection : ?AboutSection = null;

  public func addResinArtPiece(
    id : Text,
    title : Text,
    description : Text,
    image : Storage.ExternalBlob,
    resinEffect : Bool,
    resinThickness : ?Nat,
    frameMaterial : ?Text,
    isTriptych : Bool,
    isFragmented : Bool,
    isVanGogh : Bool,
    isNew : Bool,
  ) : async () {
    let artPiece : ResinArtPiece = {
      id;
      title;
      description;
      image;
      resinEffect;
      resinThickness;
      frameMaterial;
      isTriptych;
      isFragmented;
      isVanGogh;
      isNew;
    };
    resinArtPieces.add(id, artPiece);
  };

  public query func getResinArtPiece(id : Text) : async ?ResinArtPiece {
    resinArtPieces.get(id);
  };

  public query func getAllResinArtPieces() : async [ResinArtPiece] {
    resinArtPieces.values().toArray();
  };

  public func setStudioInfo(phone : Text, email : Text, address : Text, distribution : Text) : async () {
    studioInfo := ?{
      phone;
      email;
      address;
      distribution;
    };
  };

  public query func getStudioInfo() : async ?StudioInfo {
    studioInfo;
  };

  public func setAboutSection(title : Text, content : Text) : async () {
    aboutSection := ?{
      title;
      content;
    };
  };

  public query func getAboutSection() : async ?AboutSection {
    aboutSection;
  };
};

